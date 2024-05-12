import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AddDonationTest from "./AddDonationTest";
import reportWebVitals from "./reportWebVitals";
import DonorReg from "./DonorReg";
import DonorMain from "./DonorMain";
import ItemsList from "./ItemsList";
import DonorDash from "./DonorDash.js";

import DoctorItem from "./DoctorItem.js";

import TransportationOptions from "./deliveryperson";
import Delivery from "./delivery";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<DonorReg />} />
        <Route path="/donor" element={<DonorMain />} />
        <Route path="/list" element={<ItemsList />} />
        <Route path="/dash" element={<DonorDash />} />
        <Route path="/Test" element={<AddDonationTest />} />
        <Route path="/piss" element={<TransportationOptions />} />
        <Route path="/piss2" element={<Delivery />} />

        <Route path="/doctor" element={<DoctorItem />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
