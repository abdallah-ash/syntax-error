import React, { useState, useEffect } from 'react';

const ViewOrganizationDetails = () => {
  const [organization, setOrganization] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  //dummydata
  const dummyOrganization = {
    id: 1,
    name: 'Organization ABC',
    address: '123 Main St',
    contact: 'John Doe',
    type: 'Non-profit',
    // Add more details as needed
  };

  //fetch
  useEffect(() => {
    //async operation
    setTimeout(() => {
      setOrganization(dummyOrganization);
      setLoading(false);
    }, 1000); // Simulate 1 second delay
  }, []);

  //errors
  useEffect(() => {
    if (!loading && !organization) {
      setError('Failed to fetch organization details.');
    }
  }, [loading, organization]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>View Organization Details</h2>
      <div>
        <h3>Organization Name: {organization.name}</h3>
        <p>Address: {organization.address}</p>
        <p>Contact: {organization.contact}</p>
        <p>Type: {organization.type}</p>
        
      </div>
    </div>
  );
};

export default ViewOrganizationDetails;
