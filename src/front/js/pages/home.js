import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
  return (
    <div className="home-container text-center">
      <h1 className="welcome-text">Welcome!</h1>
      <p className="description-text">
        Explore amazing features and connect with our community.
      </p>
      <div className="buttons-container">
        <Link to="/signup" className="btn btn-primary">
          Register
        </Link>
        <Link to="/login" className="btn btn-secondary">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Home;
