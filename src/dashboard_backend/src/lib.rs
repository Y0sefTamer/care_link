use candid::{CandidType, Decode, Deserialize, Encode};
use ic_stable_structures::memory_manager::{MemoryId, MemoryManager, VirtualMemory};
use ic_stable_structures::{BoundedStorable, DefaultMemoryImpl, StableBTreeMap, Storable};
use std::{borrow::Cow, cell::RefCell};
use candid::Principal;
use ic_stable_structures::StableCell;
use ic_cdk::api::call::call;

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
// this the main Struct for nurse data
#[derive(CandidType, Deserialize, Clone)]
struct NurseFullData {
    basic_info: Option<BasicInfo>,
    address_info: Option<AddressInfo>,
    contact_info: Option<ContactInfo>,
    work_info: Option<WorkInfo>,
    services: Vec<String>,
}

impl Storable for NurseFullData {
    fn to_bytes(&self) -> Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), NurseFullData).unwrap()
    }
    
}

impl BoundedStorable for NurseFullData {
    const MAX_SIZE: u32 = MAX_VALUE_SIZE;
    const IS_FIXED_SIZE: bool = false;
}

thread_local! {
     static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> =
    RefCell::new(MemoryManager::init(DefaultMemoryImpl::default()));

     static Nurse_MAP: RefCell<StableBTreeMap<u64, NurseFullData, Memory>> = RefCell::new(StableBTreeMap::init(
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
     static CARE_LINK_BACKEND_CANISTER_ID: RefCell<StableCell<String, Memory>> = RefCell::new(
        StableCell::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(2))),
            String::new(), // default empty string
        ).expect("Failed to init StableCell")
    );
}

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

// functions for add nurse section
//first update functions

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
fn set_basic_info(
first_name: String,
last_name: String,
email: String,
gender: String,
age: u32,
designation: String) -> u64{

     let user_id = generate_user_id();

    Nurse_MAP.with(|n|{
        let mut store = n.borrow_mut();
        let mut nurse_profile = store.get(&user_id).unwrap_or_else(|| NurseFullData{
    basic_info: None,
    address_info: None,
    contact_info: None,
    work_info: None,
    services: vec![],
        });
        nurse_profile.basic_info = Some(BasicInfo { first_name, last_name, email, gender, age, designation });
        store.insert(user_id,nurse_profile);

    });
    user_id
}

#[ic_cdk::update]
fn set_address_info(
    user_id: u64,
    country: String,
    city: String, 
    street: String) {
    Nurse_MAP.with(|n| {
        let mut store = n.borrow_mut();
        if let Some(mut nurse_profile) = store.get(&user_id) {
            nurse_profile.address_info = Some(AddressInfo { country, city, street });
            store.insert(user_id, nurse_profile);
        }
    });
}

#[ic_cdk::update]
fn set_contact_info(
    user_id: u64,
    phone_number: String,
    emergency_contact_name: String,
    emergency_contact_number: String,
    relation_to_emergency_contact: String) {
    Nurse_MAP.with(|n| {
        let mut store = n.borrow_mut();
        if let Some(mut nurse_profile) = store.get(&user_id) {
            nurse_profile.contact_info = Some(ContactInfo { phone_number, emergency_contact_name, emergency_contact_number, relation_to_emergency_contact });
            store.insert(user_id, nurse_profile);
        }
    });
}

#[ic_cdk::update]
fn set_work_info(
    user_id: u64,
    experience_years: u8,
    certification_image: Vec<u8>,
    available_shift: String,
    preferred_location: String,
    service_fee: u32) {
    Nurse_MAP.with(|n| {
        let mut store = n.borrow_mut();
        if let Some(mut nurse_profile) = store.get(&user_id) {
            nurse_profile.work_info = Some(WorkInfo { experience_years, certification_image, available_shift, preferred_location, service_fee });
            store.insert(user_id, nurse_profile);
        }
    });
}

#[ic_cdk::update]
fn set_services(user_id: u64, services: Vec<String>) {
    Nurse_MAP.with(|n| {
        let mut store = n.borrow_mut();
        if let Some(mut nurse_profile) = store.get(&user_id) {
            nurse_profile.services = services;
            store.insert(user_id, nurse_profile);
        }
    });
}


#[ic_cdk::update]
fn save_nurse_profile(user_id: u64, profile: NurseFullData) {
    Nurse_MAP.with(|n| {
        let mut store = n.borrow_mut();
        store.insert(user_id, profile);
    });
}


//second query functions

#[ic_cdk::query]
fn get_all_nurses() -> Vec<(u64, NurseFullData)> {
    Nurse_MAP.with(|n| {
        let store = n.borrow();
        store.iter().collect()
    })
}

#[ic_cdk::query]
fn get_nurse_profile(user_id: u64) -> Option<NurseFullData>{
Nurse_MAP.with(|n| n.borrow().get(&user_id))
}


#[ic_cdk::query]
fn whoami() -> Principal {
    ic_cdk::caller()
}

// this section for handle the inter canister call from care_link_backend canister

// this fn to set care_link_backend canister id to store it
#[ic_cdk::update]
fn set_care_link_backend_id(id: Principal) {
    CARE_LINK_BACKEND_CANISTER_ID.with(|cell| {
        let mut cell = cell.borrow_mut();
        cell.set(id.to_text()).expect("failed to store booking canister id");
    });
}
// this for get it
fn get_care_link_backend_id() -> Result<Principal, String> {
    CARE_LINK_BACKEND_CANISTER_ID.with(|cell| {
        let cell = cell.borrow();
        let id_str = cell.get();
        Principal::from_text(id_str).map_err(|e| e.to_string())
    })
}
// call the get_all_bookings from the care_link canister
#[ic_cdk::update]
async fn fetch_bookings_from_care_link_backend() -> Result<Vec<(u64, Booking)>, String> {
    let care_link_backend_canister_id = get_care_link_backend_id()?;

    let result: Result<(Vec<(u64, Booking)>,), _> = call(
        care_link_backend_canister_id,
        "get_all_bookings",
        ()
    ).await;

    match result {
        Ok((bookings,)) => Ok(bookings),
        Err((code, msg)) => Err(format!("Call failed: {:?} {:?}", code, msg)),
    }
}



// Enable Candid export
ic_cdk::export_candid!();









