import "./index.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { doctorFilters, donationReq } from "./db";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import ItemsList from "./ItemsList";
import { useEffect } from "react";
import DoctorItem from "./DoctorItem";
import OrgItem from "./OrgItem";

// import { AddDonationTest } from "./AddDonationTest";

function DonorOrgList() {
  const docRequests = [
    {
      orgName: "org1",
      medSpecialty: " type 1",
      area: "cairo",
      governorate: "egypt",
    },
    {
      orgName: "org2",
      medSpecialty: " type 2",
      area: "giza",
      governorate: "egypt",
    },
    {
      orgName: "org3",
      medSpecialty: " type 3",
      area: "alex",
      governorate: "egypt",
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [filters, setFilters] = useState(doctorFilters);
  const [filtereddocRequests, setFiltereddocRequests] = useState(docRequests);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };
  const handleSearchChange = (e) => {
    const newSearchQuery = e.target.value;
    setSearchQuery(newSearchQuery);
    if (newSearchQuery === "org1") {
      setFilters({ medSpecialty: " type 1" });
    }
    if (newSearchQuery === "org2") {
      setFilters({ medSpecialty: " type 2" });
    }
    if (newSearchQuery === "org3") {
      setFilters({ medSpecialty: " type 3" });
    }
    if (newSearchQuery === "") {
      setFilters({ medSpecialty: "" });
    }

    // Update the category based on whether the search query is empty
  };

  const applyFilters = () => {
    console.log("Applying filters with:", filters);
    console.log("Donation Requests:", docRequests);

    // Filter the docRequests based on the filters and category settings
    const filtered = docRequests.filter((request) => {
      // Check category matches - Only include requests that match active categories
      // const categoryMatches =
      //   Object.entries(category).some(([key, value]) => {
      //     return value && request[key];
      //   }) || !Object.values(category).some((value) => value); // If no categories are selected, show all

      // Check attribute filters - Include requests that match all specified filters (ignore empty strings)
      const filterMatches = Object.entries(filters).every(([key, value]) => {
        return (
          value === "" ||
          (request[key] !== undefined &&
            request[key].toString() === value.toString())
        );
      });

      return filterMatches;
    });

    console.log("Filtered Requests:", filtered);
    setFiltereddocRequests(filtered);
  };

  return (
    <div className="donor-dashboard">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button
          className="filter-button"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <FontAwesomeIcon icon={faFilter} />
        </button>
        <button onClick={applyFilters}>search</button>
      </div>

      {isFilterOpen && (
        <>
          <div className="filter-form-container">
            <button onClick={() => setIsFilterOpen(false)}>Close</button>

            <div className="filter-options">
              <div>
                <h2>Org Filters</h2>
                <div>
                  <label>
                    OrgType:
                    <input
                      type="text"
                      name="medSpecialty"
                      value={filters.medSpecialty}
                      onChange={handleFilterChange}
                      placeholder="enter org type"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    area:
                    <input
                      type="text"
                      name="area"
                      value={filters.area}
                      onChange={handleFilterChange}
                      placeholder="Enter area"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    governorate:
                    <input
                      type="text"
                      name="governorate"
                      value={filters.governorate}
                      onChange={handleFilterChange}
                      placeholder="Enter governorate"
                    />
                  </label>
                </div>
              </div>
            </div>
            <button onClick={applyFilters}>Apply Filters</button>
          </div>
        </>
      )}
      <div>
        {filtereddocRequests.map((req) => (
          <OrgItem OrgReq={req} key={Math.random()} />
        ))}
      </div>
    </div>
  );
}

export default DonorOrgList;
