import "./index.css";

import { useState } from "react";

function OrgItem({ OrgReq }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleDonation = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="item-container">
        <button className="item" onClick={toggleDonation}>
          {" "}
          <label>{OrgReq.orgName}</label>{" "}
        </button>
      </div>
      {isMenuOpen && (
        <div className="doctor-pop-menu-items">
          <h1 className="item-descrip-title"> Organization info : </h1>
          <ul className="item-descrip">
            <li>Organization Name: {OrgReq.orgName}</li>
            <li>Organization Type: {OrgReq.medSpecialty} </li>
            <li>Area: {OrgReq.area}</li>
            <li>Governorate: {OrgReq.governorate}</li>
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

export default OrgItem;
