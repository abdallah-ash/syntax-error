import React, { useState, useEffect } from "react";
import OrgItem from "./OrgItem";
const ViewOrganizationDetails = () => {
  const [organization, setOrganization] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const docRequests = [
    {
      orgName: "org1",
      medSpecialty: " type 1",
      area: "cairo",
      governorate: "egypt",
      contactDetails: "123456789",
      adress: "123 street",
      location: "coordinates",
    },
    {
      orgName: "org2",
      medSpecialty: " type 2",
      area: "giza",
      governorate: "egypt",
      contactDetails: "123456789",
      adress: "123 street",
      location: "coordinates",
    },
    {
      orgName: "org3",
      medSpecialty: " type 3",
      area: "alex",
      governorate: "egypt",
      contactDetails: "123456789",
      adress: "123 street",
      location: "coordinates",
    },
  ];
  //dummydata
  const dummyOrganization = {
    id: 1,
    name: "Organization ABC",
    address: "123 Main St",
    contact: "John Doe",
    type: "Non-profit",
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
      setError("Failed to fetch organization details.");
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
        {docRequests.map((organization) => (
          <OrgItem key={organization.orgName} OrgReq={organization} />
        ))}
      </div>
    </div>
  );
};

export default ViewOrganizationDetails;
