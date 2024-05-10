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
  itemType: "",
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
  hospital: "",
  governorate: "",
  area: "",
};

export { initialFormData, searchOptions, appliedFilters };

//clothes: age, gender, season
//school supplies: books or stationary 
//toys: age, gender, category
//food: fruits and vegetables, canned foods, fresh meals, baked goods
//medical supplies: medical devices, medical equipment, medication (medical use)
//blood donations: hospital, governorate, area

let donationReq = 
    {itemType: 'balls', age: '5', gender: 'male', season: 'summer', schoolSupplies: '', category: '', fruitsAndVegies: '', cannedFood: '', 
    freshMeals: '', bakedGoods: '', medDevice: '', medEquipment: '', medication:'', medUse: '', hospital: '', hospital: '',
    governorate: '', area:''}


export default initialFormData;
export {donationReq, initialFormData};
