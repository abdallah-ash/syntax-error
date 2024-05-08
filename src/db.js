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

export default initialFormData;
