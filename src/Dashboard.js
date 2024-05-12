import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      {/* Links to different tabs */}
      <ul>
        <li><Link to="/organization-and-donor-lists">View Organization and Donor Lists</Link></li>
        <li><Link to="/submission-review">Review Organization and Donor Submissions</Link></li>
        <li><Link to="/manage-requests">Manage Organization and Donor Requests</Link></li>
        <li><Link to="/password-management">Password Management</Link></li>
        <li><Link to="/registered-organizations">View Registered Organizations</Link></li>
        <li><Link to="/view-organization-details">View Organization Details</Link></li>
        <li><Link to="/delete-account">Delete Organization or Donor Account</Link></li>
    
      </ul>
    </div>
  );
};

export default Dashboard;
