import "./index.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { appliedFilters, searchOptions } from "./db";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import OrgItemsList from "./OrgItemsList";
import { useEffect } from "react";
import { donationReq } from "./db";

// import { AddDonationTest } from "./AddDonationTest";

function OrgMain() {
    const [donation, setDonation] = useState(donationReq);
  const [allDonations, setAllDonations] = useState([]);
  const [allDoc, setAllDoc] = useState([]);
  const [allTeach, setAllTeach] = useState([]);
//   const [docDon, setDocDon] = useState(doctorDonationReq);
//   const [teacherDon, setTeacherDon] = useState(teacherDonationReq);
  const [type, setType] = useState("donor");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonation({ ...donation, [name]: value });
  };
//   const handleChangeDoc = (e) => {
//     const { name, value } = e.target;
//     setDocDon({ ...docDon, [name]: value });
//   };
//   const handleChangeTeacher = (e) => {
//     const { name, value } = e.target;
//     setTeacherDon({ ...teacherDon, [name]: value });
//   };
  const test = () => {
    console.log(allDonations);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setAllDonations([...allDonations, donation]);

    setDonation(donationReq);
    console.log(allDonations);
  };
//   const handleSubmitDoc = (e) => {
//     e.preventDefault();
//     setAllDoc([...allDoc, docDon]);
//     setDocDon(doctorDonationReq);
//     console.log(allDoc);
//     setType("doctor");
//   };
//   const handleSubmitTeacher = (e) => {
//     e.preventDefault();
//     setAllTeach([...allTeach, teacherDon]);
//     setTeacherDon(teacherDonationReq);
//     console.log(allTeach);
//     setType("teacher");
//   };

  const handleClothes = () => {
    setDonation({ ...donation, Clothes: true });
  };
  const handleToys = () => {
    setDonation({ ...donation, Toys: true });
  };
  const handleFood = () => {
    setDonation({ ...donation, Food: true });
  };
  const handleMedicalSupplies = () => {
    setDonation({ ...donation, MedicalSupplies: true });
  };
  const handleSchoolSupplies = () => {
    setDonation({ ...donation, SchoolSupplies: true });
  };
  const handleBloodDontaions = () => {
    setDonation({ ...donation, BloodDonations: true });
  };

  const location = useLocation();
  const { donationRequests = [] } = location.state || {};
  const [searchQuery, setSearchQuery] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [category, setCategory] = useState(searchOptions);
  const [filters, setFilters] = useState(appliedFilters);
  const [filteredDonationRequests, setFilteredDonationRequests] =
    useState(donationRequests);

    const [isPostMenuOpen, setPostMenuOpen] = useState(false);
    const togglePost = () => {
        setPostMenuOpen(!isPostMenuOpen);
     };

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
          <OrgItemsList donationReq={donationReq} key={Math.random()} />
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
      {allDonations.map((orgPost) => (
          <OrgItemsList donationReq={orgPost} key={Math.random()} />
        ))}
      <button onClick={togglePost}>Create</button>
      {isPostMenuOpen && (
        <div className="pop-menu-items">
        {/* <form onSubmit={handleSubmitDoc}>
        <h1>doc</h1>

        <div>
          <div>
            <label>Patient Name:</label>
            <input
              type="text"
              name="patientName"
              value={docDon.patientName}
              onChange={handleChangeDoc}
            />
          </div>
          <div>
            <label>Patient Age:</label>
            <input
              type="text"
              name="patientAge"
              value={docDon.patientAge}
              onChange={handleChangeDoc}
            />
          </div>
          <div>
            <label>Patient Gender:</label>
            <select
              name="patientGender"
              value={docDon.patientGender}
              onChange={handleChangeDoc}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label>Patient Weight:</label>
            <input
              type="text"
              name="patientWeight"
              value={docDon.patientWeight}
              onChange={handleChangeDoc}
            />
          </div>
          <div>
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={docDon.location}
              onChange={handleChangeDoc}
              placeholder="Enter location coordinates"
            />
          </div>
          <div>
            <label>Case Description:</label>
            <textarea
              name="caseDescription"
              value={docDon.caseDescription}
              onChange={handleChangeDoc}
            />
          </div>
          <div>
            <label>Medical Specialty:</label>
            <input
              type="text"
              name="medSpecialty"
              value={docDon.medSpecialty}
              onChange={handleChangeDoc}
            />
          </div>
          <div>
            <label>Organization Name:</label>
            <input
              type="text"
              name="orgName"
              value={docDon.orgName}
              onChange={handleChangeDoc}
            />
          </div>
          <div>
            <label>Area:</label>
            <input
              type="text"
              name="area"
              value={docDon.area}
              onChange={handleChangeDoc}
            />
          </div>
          <div>
            <label>Governorate:</label>
            <input
              type="text"
              name="governorate"
              value={docDon.governorate}
              onChange={handleChangeDoc}
            />
          </div>
        </div>

        <button>Ok!</button>
      </form> */}
      {/* <form onSubmit={handleSubmitTeacher}>
        <h1>Teacher Donation Form</h1>

        <div>
          <div>
            <label>Subject:</label>
            <input
              type="text"
              name="subject"
              value={teacherDon.subject}
              onChange={handleChangeTeacher}
            />
          </div>
          <div>
            <label>Area:</label>
            <input
              type="text"
              name="area"
              value={teacherDon.area}
              onChange={handleChangeTeacher}
            />
          </div>
          <div>
            <label>Governorate:</label>
            <input
              type="text"
              name="governorate"
              value={teacherDon.governorate}
              onChange={handleChangeTeacher}
            />
          </div>
          <div>
            <label>Number of Students:</label>
            <input
              type="text"
              name="noOfStudents"
              value={teacherDon.noOfStudents}
              onChange={handleChangeTeacher}
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={teacherDon.address}
              onChange={handleChangeTeacher}
            />
          </div>
        </div>

        <button type="submit">Ok!</button>
      </form> */}

      <form onSubmit={handleSubmit}>
        <h1>Clothes</h1>

        <div>
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={donation.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          <input
            type="text"
            name="gender"
            value={donation.gender}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleClothes}>Ok!</button>
      </form>
      <form onSubmit={handleSubmit}>
        <h1>School Supplies</h1>
        <div>
          <label>School supplies:</label>
          <input
            type="text"
            name="schoolSupplies"
            value={donation.schoolSupplies}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSchoolSupplies}>Ok!</button>
      </form>
      <form onSubmit={handleSubmit}>
        <h1>Toys</h1>

        <div>
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={donation.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          <input
            type="text"
            name="gender"
            value={donation.gender}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={donation.category}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleToys}>Ok!</button>
      </form>
      <form onSubmit={handleSubmit}>
        <h1>Food</h1>

        <div>
          <label>Fruits and vegetables:</label>
          <input
            type="text"
            name="fruitsAndVegies"
            value={donation.fruitsAndVegies}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Canned food:</label>
          <input
            type="text"
            name="cannedFood"
            value={donation.cannedFood}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Fresh Meals:</label>
          <input
            type="text"
            name="freshMeals"
            value={donation.freshMeals}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Baked Goods:</label>
          <input
            type="text"
            name="bakedGoods"
            value={donation.bakedGoods}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleFood}>Ok!</button>
      </form>
      <form onSubmit={handleSubmit}>
        <h1>Medical Supplies</h1>

        <div>
          <label>Medical Device:</label>
          <input
            type="text"
            name="medDevice"
            value={donation.medDevice}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Medical Equipment:</label>
          <input
            type="text"
            name="medEquipment"
            value={donation.medEquipment}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Medication:</label>
          <input
            type="text"
            name="medication"
            value={donation.medication}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Medical Use:</label>
          <input
            type="text"
            name="medUse"
            value={donation.medUse}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleMedicalSupplies}>Ok!</button>
      </form>
      <form onSubmit={handleSubmit}>
        <h1>Blood donations:</h1>

        <div>
          <label>Hospital:</label>
          <input
            type="text"
            name="hospital"
            value={donation.hospital}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Governorate:</label>
          <input
            type="text"
            name="governorate"
            value={donation.governorate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Area:</label>
          <input
            type="text"
            name="area"
            value={donation.area}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleBloodDontaions}>Ok!</button>
      </form>
      <button onClick={togglePost}>Close</button>
      </div>
      )}
    </div>
  );
}

export default OrgMain;
