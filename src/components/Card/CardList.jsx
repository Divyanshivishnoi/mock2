import React, { useState } from 'react';
import Card from './Card';
import SearchBar from '../Search/Search'; 
import './CardList.css';

const jobData = [
  { title: 'Visual Designer', location: 'Dhaka, Bangladesh', salary: '$20,000 - $35,000', type: 'REMOTE' },
  { title: 'Senior UX Designer', location: 'Delhi, India', salary: '$30,000 - $45,000', type: 'REMOTE' },
  { title: 'Marketing Officer', location: 'Tokyo, Japan', salary: '$50,000 - $55,000', type: 'REMOTE' },
  { title: 'Junior Graphic Designer', location: 'Kathmandu, Nepal', salary: '$40,000 - $45,000', type: 'REMOTE' },
  { title: 'Interaction Designer', location: 'Washington DC, Australia', salary: '$60,000 - $75,000', type: 'REMOTE' },
  { title: 'Front End Developer', location: 'Dhaka, Bangladesh', salary: '$70,000 - $80,000', type: 'REMOTE' },
];



const jobCards = Array.from({ length: 40 }, (_, i) => {
  const job = jobData[i % jobData.length]; 
  return { ...job, id: i }; 
});

const CardList = () => {
  const [filteredJobs, setFilteredJobs] = useState(jobCards);

 
  const handleFilterChange = (filters) => {
    const { keyword, location } = filters;
    const filtered = jobCards.filter((job) =>
      (job.title.toLowerCase().includes(keyword.toLowerCase()) || job.location.toLowerCase().includes(keyword.toLowerCase())) &&
      job.location.toLowerCase().includes(location.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  return (
    <div className="job-list-container">
      <SearchBar onFilterChange={handleFilterChange} />
      <div className="job-list">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <Card key={job.id} {...job} />
          ))
        ) : (
          <p>No jobs found with the given filters.</p>
        )}
      </div>
    </div>
  );
};

export default CardList;