import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AddDonationTest from "./AddDonationTest";
import reportWebVitals from "./reportWebVitals";
import DonorReg from "./DonorReg";
import DonorMain from "./DonorMain";
import ItemsList from "./ItemsList";
import DonorDash from "./DonorDash.js";
import DonorOrgList from "./DonorOrgList.js";
import DoctorItem from "./DoctorItem.js";
import Login from "./AdminLogin.js";
import Dashboard from "./Dashboard";
import OrganizationDonorList from "./OrganizationDonorList";
import SubmissionReview from "./SubmissionReview";
import ManageRequests from "./ManageRequests";
import PasswordManagement from "./PasswordManagement";
import ViewRegisteredOrganizations from "./ViewRegisteredOrganizations";
import ViewOrganizationDetails from "./ViewOrganizationDetails";
import DeleteAccount from "./DeleteAccount";
import AdminDash from "./AdminDash.js";
import OrgDashboard from "./OrgDash.js";
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orgdonorlist" element={<OrganizationDonorList />} />
        <Route path="/submissionreview" element={<SubmissionReview />} />
        <Route path="/managerequests" element={<ManageRequests />} />
        <Route path="/passwordmanagement" element={<PasswordManagement />} />
        <Route
          path="/viewregisteredorgs"
          element={<ViewRegisteredOrganizations />}
        />
        <Route path="/vieworgdetails" element={<ViewOrganizationDetails />} />
        <Route path="/deleteaccount" element={<DeleteAccount />} />
        <Route
          path="/organization-and-donor-lists"
          component={<OrganizationDonorList />}
        />
        <Route path="/submission-review" element={<SubmissionReview />} />
        <Route path="/manage-requests" element={<ManageRequests />} />
        <Route path="/password-management" element={<PasswordManagement />} />
        <Route
          path="/registered-organizations"
          element={<ViewRegisteredOrganizations />}
        />
        <Route
          path="/view-organization-details"
          element={<ViewOrganizationDetails />}
        />
        <Route path="/delete-account" element={<DeleteAccount />} />
        <Route path="/del" element={<TransportationOptions />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/org" element={<OrgDashboard/>}/>
        <Route path="/doctor" element={<DoctorItem />} />
        <Route path="/org" element={<DonorOrgList />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
