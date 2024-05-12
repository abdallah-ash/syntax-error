const initialFormData = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  password: "",
  address: "",
  area: "",
  governorate: "",
  type: "donor",
};

const searchOptions = {
  Clothes: false,
  Toys: false,
  Food: false,
  MedicalSupplies: false,
  SchoolSupplies: false,
  BloodDonations: false,
};

const appliedFilters = {
  age: "",
  gender: "",
  season: "",
  schoolSupplies: "",
  category: "",
  fruitsAndVegies: "",
  cannedFood: "",
  freshMeals: "",
  bakedGoods: "",
  medDevice: "",
  medEquipment: "",
  medication: "",
  medUse: "",
  hospital: "",
  governorate: "",
  area: "",
};

//clothes: age, gender, season
//school supplies: books or stationary
//toys: age, gender, category
//food: fruits and vegetables, canned foods, fresh meals, baked goods
//medical supplies: medical devices, medical equipment, medication (medical use)
//blood donations: hospital, governorate, area

let donationReq = {
  id: "donationReq",
  Clothes: false,
  Toys: false,
  Food: false,
  MedicalSupplies: false,
  SchoolSupplies: false,
  BloodDonations: false,
  age: "",
  gender: "",
  season: "",
  schoolSupplies: "",
  category: "",
  fruitsAndVegies: " ",
  cannedFood: "",
  freshMeals: "",
  bakedGoods: "",
  medDevice: "",
  medEquipment: "",
  medication: "",
  medUse: "",
  hospital: "",

  governorate: "",
  area: "",
  quantity: "",
};

let teacherDonationReq = {
  subject: "", //filterable
  area: "", //filterable
  governorate: "", //filterable
  noOfStudents: "",
  address: "",
};

let doctorDonationReq = {
  patientName: "",
  patientAge: "",
  patientGender: "",
  patientWegiht: "",
  location: "", //google map marker
  caseDescription: "",
  medSpecialty: "", // filterable
  orgName: "", // filterable
  area: "", // filterable
  governorate: "", // filterable
};

let doctorFilters = {
  medSpecialty: "",
  orgName: "",
  area: "",
  governorate: "",
};

let teacherFilters = {
  subject: "",
  area: "",
  governorate: "",
};

const deliveryInfo ={
 trans: "",
 time: "",
}

export default initialFormData;
export {
  donationReq,
  initialFormData,
  searchOptions,
  appliedFilters,
  teacherDonationReq,
  doctorDonationReq,
  doctorFilters,
  teacherFilters,
};
