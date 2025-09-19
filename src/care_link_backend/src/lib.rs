use candid::{CandidType, Decode, Deserialize, Encode};
use ic_stable_structures::memory_manager::{MemoryId, MemoryManager, VirtualMemory};
use ic_stable_structures::{BoundedStorable, DefaultMemoryImpl, StableBTreeMap, Storable};
use std::{borrow::Cow, cell::RefCell};
use candid::Principal;
 use ic_cdk::caller;
use ic_stable_structures::StableCell;

type Memory = VirtualMemory<DefaultMemoryImpl>;
const MAX_VALUE_SIZE: u32 = 5000;

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
// Enable Candid export
ic_cdk::export_candid!();
