import "./index.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { teacherFilters, donationReq } from "./db";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import ItemsList from "./ItemsList";
import { useEffect } from "react";
import TeacherItem from "./TeacherItem";
// import { AddDonationTest } from "./AddDonationTest";

function TeachMain() {
  const location = useLocation();
  const { teachRequests = [] } = location.state || {};
  const [searchQuery, setSearchQuery] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [filters, setFilters] = useState(teacherFilters);
  const [filteredteachRequests, setFilteredteachRequests] =
    useState(teachRequests);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    console.log("Applying filters with:", filters);
    console.log("Donation Requests:", teachRequests);

    // Filter the teachRequests based on the filters and category settings
    const filtered = teachRequests.filter((request) => {
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
    setFilteredteachRequests(filtered);
  };

  return (
    <div className="donor-dashboard">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="filter-button"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <FontAwesomeIcon icon={faFilter} />
        </button>
      </div>

      {isFilterOpen && (
        <>
          <div className="filter-form-container">
            <button onClick={() => setIsFilterOpen(false)}>Close</button>

            <div className="filter-options">
              <div>
                <h2>teach Filters</h2>
                <div>
                  <label>
                    Subject:
                    <input
                      type="text"
                      name="subject"
                      value={filters.subject}
                      onChange={handleFilterChange}
                      placeholder="Enter subject"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Area:
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
                    Governorate:
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
        {filteredteachRequests.map((req) => (
          <TeacherItem teacherDonationReq={req} key={Math.random()} />
        ))}
      </div>
    </div>
  );
}

export default TeachMain;
