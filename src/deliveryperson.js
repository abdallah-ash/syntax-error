import React, { useState } from 'react';
import "./index.css";
import deliveryInfo from "./db";
import { useNavigate } from "react-router-dom";

function TransportationOptions() {
  const navigate = useNavigate();
  const navigateToNewPage = () => {
    navigate("/dash", {
      state: {
        donationRequests: allDonations,
      },
    });
  };
  const [transData, setTransData] = useState(deliveryInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransData({ ...transData, [name]: value });
  }

  return (
    <div className="container">
      <form className="form">
        <h2>Transportation Options</h2>
        <div className="form-group">
          <label htmlFor="trans">Transportation:</label>
          <select id="trans" name="trans" value={transData.trans} onChange={handleChange}>
            <option value="Truck">Truck</option>
            <option value="Motorcycle">Motorcycle</option>
            <option value="Car">Car</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="time">Time Slot:</label>
          <select id="time" name="time" value={transData.time} onChange={handleChange}>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>
        </div>

        <div className="form-group">
          <button className="confirm-button">Confirm</button>
        </div>
      </form>
    </div>
  );
}

export default TransportationOptions;