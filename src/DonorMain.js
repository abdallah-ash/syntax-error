import "./index.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function DonorMain() {
  const location = useLocation();
  const { formData } = location.state;
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
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
        <button onClick={toggleFilter}>Filter</button>
      </div>
      {isFilterOpen && (
        <div className="filter-modal">
          <button onClick={toggleFilter}>Close</button>
          {/* Add filter options here */}
        </div>
      )}
    </div>
  );
}

export default DonorMain;
