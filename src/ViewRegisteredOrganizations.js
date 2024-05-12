import React, { useEffect, useState } from 'react';

const ViewRegisteredOrganizations = () => {
  const [organizations, setOrganizations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // dummydata
  const dummyOrganizations = [
    { id: 1, name: 'Organization A' },
    { id: 2, name: 'Organization B' },
    { id: 3, name: 'Organization C' }
  ];

  //fetch
  useEffect(() => {
    //async operation
    setTimeout(() => {
      setOrganizations(dummyOrganizations);
      setLoading(false);
    }, 1000); // Simulate 1 second delay
  }, []);

  //errors
  useEffect(() => {
    if (!loading && organizations.length === 0) {
      setError('No organizations found.');
    }
  }, [loading, organizations]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>View Registered Organizations</h2>
      <ul>
        {organizations.map(organization => (
          <li key={organization.id}>{organization.name}</li>
        
        ))}
      </ul>
    </div>
  );
};

export default ViewRegisteredOrganizations;
