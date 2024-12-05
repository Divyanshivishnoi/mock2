


import React from "react";
import "./Navigation.css";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <img
          src="/images/Frame 126.png"
          // alt="Explorin Solutions"
          className="logo-img"
        />
        
      </div>

      {/* Actions Section */}
      <div className="navbar-actions">
        {/* Toggle for My Saved Jobs Only */}
        <label className="toggle">
          <input type="checkbox" />
          <span>My Saved Jobs only</span>
        </label>

        {/* Notification Icon */}
        <img
          src="/images/BellRinging.png"
          alt="Notifications"
          className="icon bell-icon"
        />

        {/* Profile Image */}
        <img
          src="/images/Ellipse 18.png"
          alt="Profile"
          className="icon profile-img"
        />
      </div>
    </div>
  );
};

export default Navbar;

