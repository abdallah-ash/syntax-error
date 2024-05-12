import React, { useState } from "react";
import "./index.css"; // Assuming you have some CSS file to style your dashboard

// Import components for each tab

import AdminLogin from "./AdminLogin";

import OrganizationDonorList from "./OrganizationDonorList";
import SubmissionReview from "./SubmissionReview";
import ManageRequests from "./ManageRequests";
import PasswordManagement from "./PasswordManagement";

import ViewOrganizationDetails from "./ViewOrganizationDetails";
import DeleteAccount from "./DeleteAccount";
import ViewRegisteredOrganizations from "./ViewRegisteredOrganizations";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <button
          className={`tab-button ${
            activeTab === "orgdonorlist" ? "active" : ""
          }`}
          onClick={() => handleTabClick("orgdonorlist")}
        >
          View Lists
        </button>
        <button
          className={`tab-button ${
            activeTab === "submissionreview" ? "active" : ""
          }`}
          onClick={() => handleTabClick("submissionreview")}
        >
          Submission Review
        </button>
        <button
          className={`tab-button ${
            activeTab === "managerequests" ? "active" : ""
          }`}
          onClick={() => handleTabClick("managerequests")}
        >
          Manage Requests
        </button>
        <button
          className={`tab-button ${
            activeTab === "passwordmanagement" ? "active" : ""
          }`}
          onClick={() => handleTabClick("passwordmanagement")}
        >
          Password Management
        </button>
        <button
          className={`tab-button ${
            activeTab === "viewregisteredorgs" ? "active" : ""
          }`}
          onClick={() => handleTabClick("viewregisteredorgs")}
        >
          View Registered Organizations
        </button>

        <button
          className={`tab-button ${
            activeTab === "deleteaccount" ? "active" : ""
          }`}
          onClick={() => handleTabClick("deleteaccount")}
        >
          Delete Account
        </button>
      </div>
      <div className="dashboard-content">
        {activeTab === "adminlogin" && <AdminLogin />}

        {activeTab === "orgdonorlist" && <OrganizationDonorList />}
        {activeTab === "submissionreview" && <SubmissionReview />}
        {activeTab === "managerequests" && <ManageRequests />}
        {activeTab === "passwordmanagement" && <PasswordManagement />}
        {activeTab === "viewregisteredorgs" && <ViewRegisteredOrganizations />}

        {activeTab === "deleteaccount" && <DeleteAccount />}
      </div>
    </div>
  );
}

export default Dashboard;
