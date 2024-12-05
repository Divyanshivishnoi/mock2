import React from "react";
import "DetailBox.css";

function DetailBox({ job }) {
  return (
    <div className="job-card">
      <div className="job-header">
        <h2 className="job-title">{job.title}</h2>
        {job.remote && <span className="job-remote">REMOTE</span>}
      </div>
      <p className="job-salary">Salary: {job.salary}</p>
      <div className="job-footer">
        <img src="/google-logo.png" alt="Google Logo" className="company-logo" />
        <div>
          <p className="company-name">{job.company}</p>
          <p className="company-location">{job.location}</p>
        </div>
        <button className="bookmark-btn">&#9734;</button>
      </div>
    </div>
  );
}

export default DetailBox;

