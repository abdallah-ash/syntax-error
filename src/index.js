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
import Login from "./AdminLogin.js"; 
import Dashboards from './Dashboard';
import OrganizationDonorList from './OrganizationDonorList';
import SubmissionReview from './SubmissionReview';
import ManageRequests from './ManageRequests';
import PasswordManagement from './PasswordManagement';
import ViewRegisteredOrganizations from './ViewRegisteredOrganizations';
import ViewOrganizationDetails from './ViewOrganizationDetails';
import DeleteAccount from './DeleteAccount';

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
        <Route path="/adminlogin" element={<Login />} />
      <Route path="/dashboard" component={<Dashboards />} />
      <Route path="/organization-and-donor-lists" component={<OrganizationDonorList />} />
      <Route path="/submission-review" component={<SubmissionReview />} />
      <Route path="/manage-requests" component={<ManageRequests />} />
      <Route path="/password-management" component={<PasswordManagement />} />
      <Route path="/registered-organizations" component={<ViewRegisteredOrganizations />} />
      <Route path="/view-organization-details" component={<ViewOrganizationDetails />} />
      <Route path="/delete-account" component={<DeleteAccount />} />
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
