import React, { useState } from "react";
// Assuming you have some CSS file to style your dashboard
import "./index.css";
import DocMain from "./DocMain";
import TeachMain from "./TeachMain";
import DonorMain from "./DonorMain";
import Delivery from "./delivery";
import { useLocation } from "react-router-dom";
import DonorOrgList from "./DonorOrgList";
function DonorDashboard() {
  const [activeTab, setActiveTab] = useState("home");
  const location = useLocation();
  const { type } = location.state || {};
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <button
          className={`tab-button ${activeTab === "home" ? "active" : ""}`}
          onClick={() => handleTabClick("home")}
        >
          Home
        </button>
        <button
          className={`tab-button ${activeTab === "delivery" ? "active" : ""}`}
          onClick={() => handleTabClick("delivery")}
        >
          Delivery
        </button>
        <button
          className={`tab-button ${activeTab === "org" ? "active" : ""}`}
          onClick={() => handleTabClick("org")}
        >
          Org
        </button>
        {type === "doctor" && (
          <button
            className={`tab-button ${activeTab === "doctor" ? "active" : ""}`}
            onClick={() => handleTabClick("doctor")}
          >
            Doctor
          </button>
        )}
        {type === "teacher" && (
          <button
            className={`tab-button ${activeTab === "teacher" ? "active" : ""}`}
            onClick={() => handleTabClick("teacher")}
          >
            Teacher
          </button>
        )}

        <div className="notification-button">
          <span>🔔</span>
        </div>
      </div>
      <div className="dashboard-content">
        {activeTab === "home" && (
          <div>
            <DonorMain />
          </div>
        )}
        {activeTab === "delivery" && (
          <div>
            <Delivery />
          </div>
        )}
        {activeTab === "org" && (
          <div>
            <DonorOrgList />
          </div>
        )}
        {activeTab === "doctor" && (
          <div>
            <DocMain />
          </div>
        )}
        {activeTab === "teacher" && (
          <div>
            <TeachMain />
          </div>
        )}
      </div>
    </div>
  );
}

export default DonorDashboard;
