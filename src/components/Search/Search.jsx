import React from "react";
import "./Search.css";

function Search() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search by: Job title, Position, Keyword..." />
      <input type="text" placeholder="City, state or country" />
      <button className="find-job-btn">Find Job</button>
    </div>
  );
}

export default Search;

