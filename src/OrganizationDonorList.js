import React, { useState } from 'react';

const OrganizationDonorList = () => {
  const [organizations, setOrganizations] = useState([
    { id: 1, name: 'Organization A', type: 'Non-profit' },
    { id: 2, name: 'Organization B', type: 'Charity' },
    { id: 3, name: 'Organization C', type: 'Foundation' }
  ]);

  const [donors, setDonors] = useState([
    { id: 1, name: 'Donor X', type: 'Individual' },
    { id: 2, name: 'Donor Y', type: 'Corporate' },
    { id: 3, name: 'Donor Z', type: 'Foundation' }
  ]);

  return (
    <div>
      <h2>View Organization and Donor Lists</h2>
      <div>
        <h3>Organizations</h3>
        <ul>
          {organizations.map(organization => (
            <li key={organization.id}>
              <div>Name: {organization.name}</div>
              <div>Type: {organization.type}</div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Donors</h3>
        <ul>
          {donors.map(donor => (
            <li key={donor.id}>
              <div>Name: {donor.name}</div>
              <div>Type: {donor.type}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrganizationDonorList;
