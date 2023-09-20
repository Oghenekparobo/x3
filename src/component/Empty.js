import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation
import "./empty.css";
const Empty = () => {
  return (
    <div className="empty-page">
      <div className="empty-content">
        <h1 className="empty-text">Login to My Image Gallery</h1>
        <Link to="/login" className="empty-button">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Empty;
