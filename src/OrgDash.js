import React, { useState } from "react";
// Assuming you have some CSS file to style your dashboard
import "./index.css";
import OrgMain from "./OrgMain";
import { useLocation } from "react-router-dom";


function OrgDashboard() {
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
        {/* <button
          className={`tab-button ${activeTab === "delivery" ? "active" : ""}`}
          onClick={() => handleTabClick("delivery")}
        >
          Delivery
        </button> */}
        
        <div className="notification-button">
          <span>🔔</span>
        </div>
      </div>
      <div className="dashboard-content">
        {activeTab === "home" && (
          <div>
            <OrgMain />
          </div>
        )}
        {/* {activeTab === "orgin" && (
          <div>
            <Delivery />
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
        )} */}
      </div>
    </div>
  );
}

export default OrgDashboard;
