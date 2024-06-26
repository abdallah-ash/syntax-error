import React, { useState } from "react";
import "./index.css";
import deliveryInfo from "./db";
import { useNavigate } from "react-router-dom";
import ItemsList from './ItemsList';

function TransportationOptions() {
  const navigate = useNavigate();
  const navigateToNewPage = () => {
    navigate("/dash", {
    });
  };
  const [transData, setTransData] = useState(deliveryInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransData({ ...transData, [name]: value });
  };

  

  return (
    <div className="container">
        <h2>Transportation Options:</h2>
        <ul className="item-descrip">
          <li>
        <div className="form-group">
          <label htmlFor="trans">Transportation:</label>
          <select
            id="trans"
            name="trans"
            value={transData.trans}
            onChange={handleChange}
          >
            <option value="Truck">Truck</option>
            <option value="Motorcycle">Motorcycle</option>
            <option value="Car">Car</option>
          </select>
        </div>
        </li>
        <li>
        <div className="form-group">
          <label htmlFor="time">Time Slot:</label>
          <select
            id="time"
            name="time"
            value={transData.time}
            onChange={handleChange}
          >
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>
        </div>
        </li>
        </ul>
      {/* <div className="form-group">
          <button className="item-donate" onClick={handleConfirm}>Confirm</button>
        </div>
        <div className="pop-menu-items">
          {isConfirmMenuOpen && (
              <h1>Donation Confirmed</h1>
          )}
        </div> */}
    </div>
  );
}

export default TransportationOptions;
