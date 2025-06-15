// src/pages/Home/Home.jsx

import React from "react";
import "./Home.css"; // Make sure the filename is exactly Home.css (case-sensitive on some systems)

const Home = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-section">
        <div className="hero-text">
          <h2>
            Welcome to <span style={{ color: "#1e7d22" }}>Green Bite</span>
          </h2>
          <p>
            Your all-in-one online store for <br />
            food, groceries, <strong>Skincare</strong>, and more products.
          </p>
        </div>
        <div className="hero-image">
          <img
            src="/assets/images/hero.png" // ✅ Uses public path
            alt="shopping visual"
            style={{ maxWidth: "400px", borderRadius: "10px" }}
          />
        </div>
      </div>

      <div className="hero-button-container">
        <h2 className="button-h2">We Offer the Best of Products for you</h2>
        <button className="shop-now-btn">Shop Now</button>
      </div>
    </div>
  );
};

export default Home;
