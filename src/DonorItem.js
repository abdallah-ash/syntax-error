import "./index.css";
import { doctorDonationReq } from "./db";
import { useState } from "react";

function DonorItem({ doctorDonationReq }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleDonation = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="item-container">
        <button className="item" onClick={toggleDonation}>
          {" "}
          <label>{doctorDonationReq.donorName}</label>{" "}
        </button>
      </div>
      {isMenuOpen && (
        <div className="doctor-pop-menu-items">
          <h1 className="item-descrip-title"> Donor Info: </h1>
          <ul className="item-descrip">
            <li>Patient Name: {doctorDonationReq.donorName}</li>
            <li>area: {doctorDonationReq.area}</li>
            <li>governorate: {doctorDonationReq.governorate}</li>
            <li>contactDetails: {doctorDonationReq.contactDetails}</li>
            <li>adress: {doctorDonationReq.adress}</li>
            <li>location: {doctorDonationReq.location}</li>
          </ul>
          <button className="medical-case-close" onClick={toggleDonation}>
            Close
          </button>
          <button className="medical-case-accept">accept</button>
        </div>
      )}
    </>
  );
}

export default DonorItem;
