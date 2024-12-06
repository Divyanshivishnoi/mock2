
import React from 'react';
import './Card.css';

const Card = ({ title, location, salary, type }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
        </div>
        <button className="remote-btn">{type}</button>
     
      <p className="location">{location}</p>
      <p className="salary">{salary}</p>
      <img src="/images/Google__G__logo.svg.png" className='google'/>
    </div>
  );
};

export default Card;