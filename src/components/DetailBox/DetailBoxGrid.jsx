import React from "react";
import DetailBox from "./DetailBox";
import './DetailBox.css';

const jobs = [
  { title: "Technical Support Specialist", salary: "$20,000 - $25,000", company: "Google Inc.", location: "Dhaka, Bangladesh" },
  { title: "Senior UX Designer", salary: "$20,000 - $25,000", company: "Google Inc.", location: "Dhaka, Bangladesh" },
  // Add all job listings here...
];

const DetailBoxGrid = () => {
  return (
    <div className="job-grid" style={
        {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
        }
    }>
      {jobs.map((job, index) => (
        <JobCard
          key={index}
          title={job.title}
          salary={job.salary}
          company={job.company}
          location={job.location}
        />
      ))}
    </div>
  );
};

export default DetailBoxGrid;

