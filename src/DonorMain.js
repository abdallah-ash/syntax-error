import "./index.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { appliedFilters, searchOptions } from "./db";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import ItemsList from "./ItemsList";
import { useEffect } from "react";

// import { AddDonationTest } from "./AddDonationTest";

function DonorMain() {
  const location = useLocation();
  const { donationRequests = [] } = location.state || {};
  const [searchQuery, setSearchQuery] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [category, setCategory] = useState(searchOptions);
  const [filters, setFilters] = useState(appliedFilters);
  const [filteredDonationRequests, setFilteredDonationRequests] =
    useState(donationRequests);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (event) => {
    const { name, checked } = event.target;
    setCategory((prev) => ({ ...prev, [name]: checked }));
  };

  const applyFilters = () => {
    console.log("Applying filters with:", filters, category);
    console.log("Donation Requests:", donationRequests);

    // Filter the donationRequests based on the filters and category settings
    const filtered = donationRequests.filter((request) => {
      // Check category matches - Only include requests that match active categories
      const categoryMatches =
        Object.entries(category).some(([key, value]) => {
          return value && request[key];
        }) || !Object.values(category).some((value) => value); // If no categories are selected, show all

      // Check attribute filters - Include requests that match all specified filters (ignore empty strings)
      const filterMatches = Object.entries(filters).every(([key, value]) => {
        return (
          value === "" ||
          (request[key] !== undefined &&
            request[key].toString() === value.toString())
        );
      });

      return categoryMatches && filterMatches;
    });

    console.log("Filtered Requests:", filtered);
    setFilteredDonationRequests(filtered);
  };

  return (
    <div className="donor-dashboard">
      <div className="search-bar">
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt=" logo duh"/>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
          Category
        </button>
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <FontAwesomeIcon icon={faFilter} />
        </button>
      </div>

      {isFilterOpen && (
        <>
          <button onClick={applyFilters}>Apply Filters</button>
          <div className="filter-form-container">
            
            <div className="filter-options">
              {category.Clothes && (
                <div>
                  <h2>Filter Clothes</h2>
                  <div>
                    <label>
                      Age:
                      <input
                        type="text"
                        name="age"
                        value={filters.age}
                        onChange={handleFilterChange}
                        placeholder="Enter age group"
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Gender:
                      <select
                        name="gender"
                        value={filters.gender}
                        onChange={handleFilterChange}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="unisex">Unisex</option>
                      </select>
                    </label>
                  </div>
                  <div>
                    <label>
                      Season:
                      <select
                        name="season"
                        value={filters.season}
                        onChange={handleFilterChange}
                      >
                        <option value="">Select Season</option>
                        <option value="spring">Spring</option>
                        <option value="summer">Summer</option>
                        <option value="autumn">Autumn</option>
                        <option value="winter">Winter</option>
                      </select>
                    </label>
                  </div>
                </div>
              )}
              {category.Toys && (
                <div>
                  <h3>Toys</h3>
                  <input
                    type="text"
                    name="toysAge"
                    value={filters.toysAge}
                    placeholder="Age"
                    onChange={handleFilterChange}
                  />
                  <select
                    name="toysGender"
                    value={filters.toysGender}
                    onChange={handleFilterChange}
                  >
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="unisex">Unisex</option>
                  </select>
                  <input
                    type="text"
                    name="toysCategory"
                    value={filters.toysCategory}
                    placeholder="Category"
                    onChange={handleFilterChange}
                  />
                </div>
              )}
              {category.Food && (
                <div>
                  <h3>Food</h3>
                  <label>
                    Fruits and Vegetables :
                    <input
                      type="text"
                      name="fruitsAndVegies"
                      value={filters.fruitsAndVegies}
                      onChange={handleFilterChange}
                    />
                  </label>
                  <label>
                    Canned Foods :
                    <input
                      type="text"
                      name="cannedFood"
                      value={filters.cannedFood}
                      onChange={handleFilterChange}
                    />
                  </label>
                  <label>
                    Fresh Meals :
                    <input
                      type="text"
                      name="freshMeals"
                      value={filters.freshMeals}
                      onChange={handleFilterChange}
                    />
                  </label>
                  <label>
                    Baked Goods :
                    <input
                      type="text"
                      name="bakedGoods"
                      value={filters.bakedGoods}
                      onChange={handleFilterChange}
                    />
                  </label>
                </div>
              )}
              {category.MedicalSupplies && (
                <div>
                  <h3>Medical Supplies</h3>
                  <label>
                  Medical Devices:
                    <input
                      type="text"
                      name="medDevice"
                      value={filters.medDevice}
                      onChange={handleFilterChange}
                    />
                  </label>
                  <label>
                  Medical Equipment:
                    <input
                      type="text"
                      name="medEquipment"
                      value={filters.medEquipment}
                      onChange={handleFilterChange}
                    />
                  </label>
                  <label>
                  Medication:
                    <input
                      type="text"
                      name="medUse"
                      value={filters.medUse}
                      onChange={handleFilterChange}
                    /> 
                  </label>
                  <label>
                  Medical Use:
                    <input
                      type="text"
                      name="medUse"
                      value={filters.medUse}
                      onChange={handleFilterChange}
                    />
                  </label>
                </div>
              )}
              {category.SchoolSupplies && (
                <div>
                  <h3>School Supplies</h3>
                  <select
                    name="schoolSupplies"
                    value={filters.schoolSupplies}
                    onChange={handleFilterChange}
                  >
                    <option value="">Select</option>
                    <option value="books">Books</option>
                    <option value="stationary">Stationary</option>
                  </select>
                </div>
              )}
              {category.BloodDonations && (
                <div>
                  <h3>Blood Donations</h3>
                  <div>
                  <input
                    type="text"
                    name="bloodDonationsHospital"
                    value={filters.bloodDonationsHospital}
                    placeholder="Hospital"
                    onChange={handleFilterChange}
                  />
                  </div>
                  <div>
                  <input
                    type="text"
                    name="bloodDonationsGovernorate"
                    value={filters.bloodDonationsGovernorate}
                    placeholder="Governorate"
                    onChange={handleFilterChange}
                  />
                  </div>
                  <input
                    type="text"
                    name="bloodDonationsArea"
                    value={filters.bloodDonationsArea}
                    placeholder="Area"
                    onChange={handleFilterChange}
                  />
                </div>
              )}
            </div>
            <button onClick={() => setIsFilterOpen(false)}>Close</button>
            <button>Apply category</button>
          </div>
        </>
      )}
      <div>
        {filteredDonationRequests.map((donationReq) => (
          <ItemsList donationReq={donationReq} key={Math.random()} />
        ))}
      </div>
      {isCategoryOpen && (
        <div className="filter-modal">
          <button onClick={() => setIsCategoryOpen(false)}>Close</button>
          <div className="filter-options">
            <label>
              Clothes
              <input
                type="checkbox"
                name="Clothes"
                checked={category.Clothes}
                onChange={handleCategoryChange}
              />
            </label>
            <label>
              Toys
              <input
                type="checkbox"
                name="Toys"
                checked={category.Toys}
                onChange={handleCategoryChange}
              />
            </label>
            <label>
              Food
              <input
                type="checkbox"
                name="Food"
                checked={category.Food}
                onChange={handleCategoryChange}
              />
            </label>
            <label>
              Medical Supplies
              <input
                type="checkbox"
                name="MedicalSupplies"
                checked={category.MedicalSupplies}
                onChange={handleCategoryChange}
              />
            </label>
            <label>
              School Supplies
              <input
                type="checkbox"
                name="SchoolSupplies"
                checked={category.SchoolSupplies}
                onChange={handleCategoryChange}
              />
            </label>
            <label>
              Blood Donations
              <input
                type="checkbox"
                name="BloodDonations"
                checked={category.BloodDonations}
                onChange={handleCategoryChange}
              />
            </label>
          </div>
          <button>Apply category</button>
        </div>
      )}
    </div>
  );
}

export default DonorMain;
