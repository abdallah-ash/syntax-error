import "./index.css";
import { doctorDonationReq } from "./db";
import { useState } from "react";

function DoctorItem({ doctorDonationReq }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleDonation = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="item-container">
        <button className="item" onClick={toggleDonation}>
          {" "}
          <label>Medical Case</label>{" "}
        </button>
      </div>
      {isMenuOpen && (
        <div className="doctor-pop-menu-items">
          <h1 className="item-descrip-title"> Medical Case: </h1>
          <ul className="item-descrip">
            <li>Patient Name: {doctorDonationReq.patientName}</li>
            <li>Patient Age: {doctorDonationReq.patientAge}</li>
            <li>Patient Gender: {doctorDonationReq.patientGender}</li>
            <li>Patient Weight: {doctorDonationReq.patientWeight}</li>
            <li>Case Description: {doctorDonationReq.caseDescription}</li>
            <li>Medical Specialty needed: {doctorDonationReq.medSpecialty}</li>
            <li>Organization Name: {doctorDonationReq.orgName}</li>
            <li>Area: {doctorDonationReq.area}</li>
            <li>Governorate: {doctorDonationReq.governorate}</li>
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

export default DoctorItem;
