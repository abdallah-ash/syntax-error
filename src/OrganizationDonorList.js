import React, { useState } from "react";
import OrgItem from "./OrgItem";
import DonorItem from "./DonorItem";
const OrganizationDonorList = () => {
  const organizationss = [
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
  const Donorss = [
    {
      donorName: "donor1",
      medSpecialty: " type 1",
      area: "cairo",
      governorate: "egypt",
      contactDetails: "123456789",
      adress: "123 street",
      location: "coordinates",
    },
    {
      donorName: "donor2",
      medSpecialty: " type 2",
      area: "giza",
      governorate: "egypt",
      contactDetails: "123456789",
      adress: "123 street",
      location: "coordinates",
    },
  ];

  return (
    <div>
      <h2>View Organization and Donor Lists</h2>
      <div>
        <h3>Organizations</h3>

        {organizationss.map((organization) => (
          <OrgItem key={organization.id} OrgReq={organization} />
        ))}
      </div>
      <div>
        <h3>Donors</h3>

        {Donorss.map((donor) => (
          <DonorItem key={donor.id} doctorDonationReq={donor} />
        ))}
      </div>
    </div>
  );
};

export default OrganizationDonorList;
