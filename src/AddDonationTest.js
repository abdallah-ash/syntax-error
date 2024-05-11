import { useState } from "react";
import "./index.css";
import { ItemsList } from "./ItemsList";
import { donationReq } from "./db";
import { useNavigate } from "react-router-dom";

// id: "donationReq",
//   itemType: "",
//   age: "",
//   gender: "",
//   season: "",
//   schoolSupplies: "",
//   category: "",
//   fruitsAndVegies: "",
//   cannedFood: "",
//   freshMeals: "",
//   bakedGoods: "",
//   medDevice: "",
//   medEquipment: "",
//   medication: "",
//   medUse: "",
//   hospital: "",
//   hospital: "",
//   governorate: "",
//   area: "",
//   quantity: ""

//clothes: age, gender, season
//school supplies: books or stationary
//toys: age, gender, category
//food: fruits and vegetables, canned foods, fresh meals, baked goods
//medical supplies: medical devices, medical equipment, medication (medical use)
//blood donations: hospital, governorate, area

function AddDonationTest() {
  const navigate = useNavigate();
  const navigateToNewPage = () => {
    navigate("/dash", { state: { donationRequests: allDonations } });
  };

  const [donation, setDonation] = useState(donationReq);
  const [allDonations, setAllDonations] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonation({ ...donation, [name]: value });
  };
  const test = () => {
    console.log(allDonations);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setAllDonations([...allDonations, donation]);
    setDonation(donationReq);
    console.log(allDonations);
  };
  const handleClothes = () => {
    setDonation({ ...donation, Clothes: true });
  };
  const handleToys = () => {
    setDonation({ ...donation, Toys: true });
  };
  const handleFood = () => {
    setDonation({ ...donation, Food: true });
  };
  const handleMedicalSupplies = () => {
    setDonation({ ...donation, MedicalSupplies: true });
  };
  const handleSchoolSupplies = () => {
    setDonation({ ...donation, SchoolSupplies: true });
  };
  const handleBloodDontaions = () => {
    setDonation({ ...donation, BloodDonations: true });
  };

  return (
    <>
      <button onClick={test}>Go to New Page</button>
      <h1>
        ONLY FILL ONE OF THE SECTIONS AND DONT FKIN PRESS ENTER CLICK ON THE
        BUTTON
      </h1>
      <h1>
        CLICK ENTER TO CREATE THE EMPTY ARRAY THEN ENTER AGAIN TO ADD TO THE
        ARRAY
      </h1>
      <form onSubmit={handleSubmit}>
        <h1>Clothes</h1>

        <div>
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={donation.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          <input
            type="text"
            name="gender"
            value={donation.gender}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleClothes}>Ok!</button>
      </form>
      <form onSubmit={handleSubmit}>
        <h1>School Supplies</h1>
        <div>
          <label>School supplies:</label>
          <input
            type="text"
            name="schoolSupplies"
            value={donation.schoolSupplies}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSchoolSupplies}>Ok!</button>
      </form>
      <form onSubmit={handleSubmit}>
        <h1>Toys</h1>

        <div>
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={donation.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          <input
            type="text"
            name="gender"
            value={donation.gender}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={donation.category}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleToys}>Ok!</button>
      </form>
      <form onSubmit={handleSubmit}>
        <h1>Food</h1>

        <div>
          <label>Fruits and vegetables:</label>
          <input
            type="text"
            name="fruitsAndVegies"
            value={donation.fruitsAndVegies}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Canned food:</label>
          <input
            type="text"
            name="cannedFood"
            value={donation.cannedFood}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Fresh Meals:</label>
          <input
            type="text"
            name="freshMeals"
            value={donation.freshMeals}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Baked Goods:</label>
          <input
            type="text"
            name="bakedGoods"
            value={donation.bakedGoods}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleFood}>Ok!</button>
      </form>
      <form onSubmit={handleSubmit}>
        <h1>Medical Supplies</h1>

        <div>
          <label>Medical Device:</label>
          <input
            type="text"
            name="medDevice"
            value={donation.medDevice}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Medical Equipment:</label>
          <input
            type="text"
            name="medEquipment"
            value={donation.medEquipment}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Medication:</label>
          <input
            type="text"
            name="medication"
            value={donation.medication}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Medical Use:</label>
          <input
            type="text"
            name="medUse"
            value={donation.medUse}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleMedicalSupplies}>Ok!</button>
      </form>
      <form onSubmit={handleSubmit}>
        <h1>Blood donations:</h1>

        <div>
          <label>Hospital:</label>
          <input
            type="text"
            name="hospital"
            value={donation.hospital}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Governorate:</label>
          <input
            type="text"
            name="governorate"
            value={donation.governorate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Area:</label>
          <input
            type="text"
            name="area"
            value={donation.area}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleBloodDontaions}>Ok!</button>
      </form>
      <button onClick={navigateToNewPage}>Go to New Page</button>
    </>
  );
}

export default AddDonationTest;
