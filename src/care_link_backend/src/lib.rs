use candid::{CandidType, Decode, Deserialize, Encode};
use ic_stable_structures::memory_manager::{MemoryId, MemoryManager, VirtualMemory};
use ic_stable_structures::{BoundedStorable, DefaultMemoryImpl, StableBTreeMap, Storable};
use std::{borrow::Cow, cell::RefCell};
use candid::Principal;
 use ic_cdk::caller;
use ic_stable_structures::StableCell;
use ic_cdk::api::call::call;

type Memory = VirtualMemory<DefaultMemoryImpl>;
const MAX_VALUE_SIZE: u32 = 5000;

// this the main Struct for nurse data
#[derive(CandidType, Deserialize, Clone)]
struct NurseFullData {
    basic_info: Option<BasicInfo>,
    address_info: Option<AddressInfo>,
    contact_info: Option<ContactInfo>,
    work_info: Option<WorkInfo>,
    services: Vec<String>,
}

// this the Struct for booking 
#[derive(CandidType, Deserialize, Clone)]
struct Booking{
    patient: Principal,     
    nurse: String,
    full_name: String,
    phone_number: String,
    date: String,
    time: String,
    number_of_hours: String,
    status: String,
}

// this is for Storge
impl Storable for Booking {
    fn to_bytes(&self) -> Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Booking).unwrap()
    }
    
}

impl BoundedStorable for Booking {
    const MAX_SIZE: u32 = MAX_VALUE_SIZE;
    const IS_FIXED_SIZE: bool = false;
}

thread_local! {
     static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> =
    RefCell::new(MemoryManager::init(DefaultMemoryImpl::default()));

     static BOOKING_MAP: RefCell<StableBTreeMap<u64, Booking, Memory>> = RefCell::new(StableBTreeMap::init(
        MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(0))),
    ));

    // generate user id
     static USER_COUNTER: RefCell<StableCell<u64, Memory>> = RefCell::new(
        StableCell::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(1))),
            0, 
        ).expect("Failed to init counter cell")
    );
    //  store the care_link_backend canister id
     static DASBOARD_BACKEND_CANISTER_ID: RefCell<StableCell<String, Memory>> = RefCell::new(
        StableCell::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(2))),
            String::new(), // default empty string
        ).expect("Failed to init StableCell")
    );

}

// this for mange the fetching date from dashboard to care_link_canister
// mange add nurse section


#[derive(CandidType, Deserialize, Clone, Debug)]
struct BasicInfo {
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    age: u32, 
    designation: String,
}

#[derive(CandidType, Deserialize, Clone, Debug)]
struct AddressInfo {
    country: String,
    city: String,
    street: String,
}

#[derive(CandidType, Deserialize, Clone, Debug)]
struct ContactInfo {
    phone_number: String,
    emergency_contact_name: String,
    emergency_contact_number: String,
    relation_to_emergency_contact: String,
}

#[derive(CandidType, Deserialize, Clone, Debug)]
struct WorkInfo {
    experience_years: u8,
    certification_image: Vec<u8>,
    available_shift: String,
    preferred_location: String,
    service_fee: u32,
}
// update fun for Booking 

#[ic_cdk::update]
fn generate_user_id() -> u64 {
    USER_COUNTER.with(|counter_cell| {
        let mut cell = counter_cell.borrow_mut();
        let current = cell.get();
        let new_id = current + 1;
        cell.set(new_id).expect("Failed to update counter");
        new_id
    })
}

#[ic_cdk::update]
fn create_booking(
    nurse: String,
    full_name: String,
    phone_number: String,
    date: String,
    time: String,
    number_of_hours: String,
    status: String
) -> u64{
    let user_id = generate_user_id();
    let patient = caller();
     let booking = Booking {
        patient,
        nurse,
        full_name,
        phone_number,
        date,
        time,
        number_of_hours,
        status: "pending".to_string(),
    };
    BOOKING_MAP.with(|b|{
        let mut store = b.borrow_mut();
        store.insert(user_id,booking);
    });
    user_id
}
#[ic_cdk::update]
fn confirm_booking(id: u64) -> Result<(), String> {
    BOOKING_MAP.with(|b| {
        let mut store = b.borrow_mut();

        match store.get(&id) {
            Some(mut booking) => {
                booking.status = "confirmed".to_string();
                store.insert(id, booking); 
                Ok(())
            }
            None => Err(format!("Booking with id {} not found", id)),
        }
    })
}

// query fn for Booking
// this will display in dashboard
#[ic_cdk::query]
fn get_all_bookings() -> Vec<(u64, Booking)> {
    BOOKING_MAP.with(|b| {
        let store = b.borrow();
        store.iter().collect()
    })
}
// for get the all bookings of the specific user 
#[ic_cdk::query]
fn get_my_bookings() -> Vec<(u64, Booking)> {
    let patient = ic_cdk::api::caller();

    BOOKING_MAP.with(|b| {
        let store = b.borrow();
        store
            .iter()
            .filter(|(_, booking)| booking.patient == patient) 
            .collect()
    })
}
// this for know the principal of the user when logedin or not loged
#[ic_cdk::query]
fn whoami() -> Principal {
    ic_cdk::caller()
}


// this section for handle the inter canister call from dashboard_backend canister

// this fn to set dashboard_backend canister id to store it
#[ic_cdk::update]
fn set_dashboard_backend_id(id: Principal) {
    DASBOARD_BACKEND_CANISTER_ID.with(|cell| {
        let mut cell = cell.borrow_mut();
        cell.set(id.to_text()).expect("failed to store booking canister id");
    });
}
// this for get it
fn get_dashboard_backend_id() -> Result<Principal, String> {
    DASBOARD_BACKEND_CANISTER_ID.with(|cell| {
        let cell = cell.borrow();
        let id_str = cell.get();
        Principal::from_text(id_str).map_err(|e| e.to_string())
    })
}
// call the get_all_nurses from the dashboard canister
#[ic_cdk::update]
async fn fetch_nurses_from_dashboard() -> Result<Vec<(u64, NurseFullData)>, String> {
    let dashboard_canister_id = get_dashboard_backend_id()?;

    let result: Result<(Vec<(u64, NurseFullData)>,), _> = call(
        dashboard_canister_id,
        "get_all_nurses",
        ()
    ).await;

    match result {
        Ok((nurses,)) => Ok(nurses),
        Err((code, msg)) => Err(format!("Call failed: {:?} {:?}", code, msg)),
    }
}

// Enable Candid export
ic_cdk::export_candid!();
