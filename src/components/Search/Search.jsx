import React, { useState } from "react";
import "./Search.css";

const Search = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = () => {
    if (jobTitle || location) {
      setSearchResult({ jobTitle, location });
    } else {
      setSearchResult(null);
    }
  };

  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search by: Job title, Position, Keyword..."
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="search-input"
        />

        <input
          type="text"
          placeholder="City, state or country"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="location-input"
        />

        <button className="search-button" onClick={handleSearch}>
          Find Job
        </button>
      </div>

      {searchResult && (
        <div className="search-result">
          <h3>Search Results:</h3>
          <p>
            Job Title: <strong>{searchResult.jobTitle}</strong>
          </p>
          <p>
            Location: <strong>{searchResult.location}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;







