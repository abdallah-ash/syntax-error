import "./index.css";
import React, { useEffect, useState } from "react";
import { donationReq } from "./db";

function ItemsList({ donationReq }) {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleDonation = () => {
        setMenuOpen(!isMenuOpen);
     };

    const [quantities, setQuantities] = useState([1]); // Initial quantities for each item
    const handleQuantityChange = (index, value) => {
        const newQuantities = [...quantities];
        newQuantities[index] = value;
        setQuantities(newQuantities);
    };

  return (
    <>
      <div className="item-container">
        <button className="item" onClick={toggleDonation}>
          {" "}
          <label>
            {" "}
            {donationReq.Clothes && "Clothes"}
            {donationReq.Toys && "Toys"}
            {donationReq.Food && "Food"}
            {donationReq.MedicalSupplies && "Medical Supplies"}
            {donationReq.SchoolSupplies && "School Supplies"}
            {donationReq.BloodDonations && "Blood Donations"}
          </label>{" "}
        </button>
      </div>
      {isMenuOpen && (
        <div className="pop-menu-items">
          <h1 className="item-descrip-title">
            {" "}
            {donationReq.Clothes && "Clothes"}
            {donationReq.Toys && "Toys"}
            {donationReq.Food && "Food"}
            {donationReq.MedicalSupplies && "Medical Supplies"}
            {donationReq.SchoolSupplies && "School Supplies"}
            {donationReq.BloodDonations && "Blood Donations"}:{" "}
          </h1>
          <ul className="item-descrip">
            {donationReq.age !== "" && <li>Age: {donationReq.age}</li>}
            {donationReq.gender !== "" && <li>Gender: {donationReq.gender}</li>}
            {donationReq.season !== "" && <li>Season: {donationReq.season}</li>}
            {donationReq.schoolSupplies !== "" && (
              <li>School supply type: {donationReq.schoolSupplies}</li>
            )}
            {donationReq.category !== "" && (
              <li>Toy category: {donationReq.category}</li>
            )}
            {donationReq.fruitsAndVegies !== "" && (
              <li>Fruit and vegetables: {donationReq.fruitsAndVegies}</li>
            )}
            {donationReq.cannedFood !== "" && (
              <li>Canned food: {donationReq.cannedFood}</li>
            )}
            {donationReq.freshMeals !== "" && (
              <li>Fresh meals: {donationReq.freshMeals}</li>
            )}
            {donationReq.bakedGoods !== "" && (
              <li>Baked goods: {donationReq.bakedGoods}</li>
            )}
            {donationReq.medDevice !== "" && (
              <li>Medical device: {donationReq.medDevice}</li>
            )}
            {donationReq.medEquipment !== "" && (
              <li>Medical Equipment: {donationReq.medEquipment}</li>
            )}
            {donationReq.medication !== "" && (
              <li>Medication: {donationReq.medication}</li>
            )}
            {donationReq.medUse !== "" && (
              <li>Medical Use: {donationReq.medUse}</li>
            )}
            {donationReq.hospital !== "" && (
              <li>Hospital: {donationReq.hospital}</li>
            )}
            {donationReq.governorate !== "" && (
              <li>Governorate: {donationReq.governorate}</li>
            )}
            {donationReq.area !== "" && <li>Area: {donationReq.area}</li>}
            {quantities.map((quantity, index) => (
                    <li key={index}>
                    Quantity:
                    <input
                    type="number"
                    min="0"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                    />
                    </li>
                    ))}
          </ul>
          <button className="item-close" onClick={toggleDonation}>
            Close
          </button>
          <button className="item-donate">donate</button>
        </div>
      )}
    </>
  );
}

export default ItemsList;
