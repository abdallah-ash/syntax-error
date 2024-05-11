import React, { useState } from "react";
// Assuming you have some CSS file to style your dashboard
import "./index.css";
import DonorMain from "./DonorMain";
function DonorDashboard() {
  const [activeTab, setActiveTab] = useState("home");

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
          className={`tab-button ${activeTab === "profile" ? "active" : ""}`}
          onClick={() => handleTabClick("profile")}
        >
          Profile
        </button>
        <button
          className={`tab-button ${activeTab === "settings" ? "active" : ""}`}
          onClick={() => handleTabClick("settings")}
        >
          Settings
        </button>
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
        {activeTab === "profile" && <div>Profile Content</div>}
        {activeTab === "settings" && <div>Settings Content</div>}
      </div>
    </div>
  );
}

export default DonorDashboard;
