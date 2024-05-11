import "./index.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { appliedFilters, searchOptions } from "./db";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

function DonorMain() {
  const location = useLocation();
  //const { formData } = location.state;
  const [searchQuery, setSearchQuery] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const handleButton = () => {
    // Add code to apply filters
    console.log(category);
  };

  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const [category, setCategory] = useState(searchOptions);
  const [filters, setFilters] = useState(appliedFilters);
  const handleCategoryChange = (event) => {
    const { name, checked } = event.target;
    setCategory((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };
  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  return (
    <div className="donor-dashboard">
      <div className="search-bar">
        <input type="text" placeholder="Search..." value={searchQuery} />
        <button onClick={toggleCategory}>category</button>
      </div>
      <div>
        <button className="filter-button" onClick={toggleFilter}>
          <FontAwesomeIcon icon={faFilter} />
        </button>
      </div>
      {isFilterOpen && (
        <div className="filter-form-container">
          <button onClick={toggleFilter}>Close</button>
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
                  <input
                    type="checkbox"
                    name="foodFruitsAndVegetables"
                    checked={filters.foodFruitsAndVegetables}
                    onChange={handleFilterChange}
                  />
                  Fruits and Vegetables
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="foodCannedFoods"
                    checked={filters.foodCannedFoods}
                    onChange={handleFilterChange}
                  />
                  Canned Foods
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="foodFreshMeals"
                    checked={filters.foodFreshMeals}
                    onChange={handleFilterChange}
                  />
                  Fresh Meals
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="foodBakedGoods"
                    checked={filters.foodBakedGoods}
                    onChange={handleFilterChange}
                  />
                  Baked Goods
                </label>
              </div>
            )}
            {category.MedicalSupplies && (
              <div>
                <h3>Medical Supplies</h3>
                <label>
                  <input
                    type="checkbox"
                    name="medicalSuppliesDevices"
                    checked={filters.medicalSuppliesDevices}
                    onChange={handleFilterChange}
                  />
                  Medical Devices
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="medicalSuppliesEquipment"
                    checked={filters.medicalSuppliesEquipment}
                    onChange={handleFilterChange}
                  />
                  Medical Equipment
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="medicalSuppliesMedication"
                    checked={filters.medicalSuppliesMedication}
                    onChange={handleFilterChange}
                  />
                  Medication (Medical Use)
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
                <input
                  type="text"
                  name="bloodDonationsHospital"
                  value={filters.bloodDonationsHospital}
                  placeholder="Hospital"
                  onChange={handleFilterChange}
                />
                <input
                  type="text"
                  name="bloodDonationsGovernorate"
                  value={filters.bloodDonationsGovernorate}
                  placeholder="Governorate"
                  onChange={handleFilterChange}
                />
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
          <button onClick={handleButton}>Apply category</button>
        </div>
      )}
      {isCategoryOpen && (
        <div className="filter-modal">
          <button onClick={toggleCategory}>Close</button>
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
          <button onClick={handleButton}>Apply category</button>
        </div>
      )}
    </div>
  );
}

export default DonorMain;
