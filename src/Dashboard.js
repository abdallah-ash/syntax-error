import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      {/* Links to different tabs */}
      <ul>
        <li>
          <Link to="/organization-and-donor-lists">
            <button>View Organization and Donor Lists</button>
          </Link>
          <button onClick={() => window.location.href = '/organization-and-donor-lists'}>
            Go to View Organization and Donor Lists
          </button>
        </li>
        <li>
          <Link to="/submission-review">
            <button>Review Organization and Donor Submissions</button>
          </Link>
          <button onClick={() => window.location.href = '/submission-review'}>
            Go to Review Organization and Donor Submissions
          </button>
        </li>
        <li>
          <Link to="/manage-requests">
            <button>Manage Organization and Donor Requests</button>
          </Link>
          <button onClick={() => window.location.href = '/manage-requests'}>
            Go to Manage Organization and Donor Requests
          </button>
        </li>
        <li>
          <Link to="/password-management">
            <button>Password Management</button>
          </Link>
          <button onClick={() => window.location.href = '/password-management'}>
            Go to Password Management
          </button>
        </li>
        <li>
          <Link to="/registered-organizations">
            <button>View Registered Organizations</button>
          </Link>
          <button onClick={() => window.location.href = '/registered-organizations'}>
            Go to View Registered Organizations
          </button>
        </li>
        <li>
          <Link to="/view-organization-details">
            <button>View Organization Details</button>
          </Link>
          <button onClick={() => window.location.href = '/view-organization-details'}>
            Go to View Organization Details
          </button>
        </li>
        <li>
          <Link to="/delete-account">
            <button>Delete Organization or Donor Account</button>
          </Link>
          <button onClick={() => window.location.href = '/delete-account'}>
            Go to Delete Organization or Donor Account
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
