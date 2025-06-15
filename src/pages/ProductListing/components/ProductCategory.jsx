// src/pages/ProductListing/components/ProductCategory.jsx

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { categories } from "../../../data/categories";
import "./ProductCategory.css";

export const ProductCategory = () => {
  const [expanded, setExpanded] = useState({});
  const location = useLocation();

  const toggleCategory = (category) => {
    setExpanded((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const renderCategory = (name, sub) => {
    const isActive = location.pathname.includes(`/category/${name.toLowerCase()}`);
    const isExpanded = expanded[name];

    return (
      <li key={name} className="main-category">
        <button className="main-category-btn" onClick={() => toggleCategory(name)}>
          {name} {typeof sub === "object" ? (isExpanded ? "▲" : "▼") : null}
        </button>

        {/* Subcategories */}
        {isExpanded && typeof sub === "object" && (
          <ul className="subcategory-list">
            {Object.keys(sub).map((subName) => (
              <li key={subName}>
                <Link
                  to={`/category/${name.toLowerCase()}/${subName.toLowerCase().replace(/\s/g, '-')}`}
                  className="subcategory-link"
                >
                  {subName}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Flat link for top-level category (like Study Supply, Healthcare) */}
        {sub === null && (
          <Link to={`/category/${name.toLowerCase()}`} className="subcategory-link no-indent">
            View All
          </Link>
        )}
      </li>
    );
  };

  return (
    <div className="product-category-wrapper">
      <h3 className="category-heading">Category</h3>
      <ul className="category-list">
        {Object.entries(categories).map(([name, sub]) => renderCategory(name, sub))}
      </ul>
    </div>
  );
};
