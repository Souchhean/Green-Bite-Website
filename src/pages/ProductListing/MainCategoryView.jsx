// src/pages/ProductListing/MainCategoryView.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { seedCategories } from "../../backend/db/seedCategories";
import "./ProductListing.css";

export const MainCategoryView = () => {
  const { mainCategory } = useParams();
  const navigate = useNavigate();

  const category = seedCategories.find(
    (cat) => cat.name.toLowerCase() === mainCategory
  );

  if (!category) return <p style={{ padding: "20px" }}>Category not found.</p>;

  return (
    <div className="subcategory-wrapper">
      <div className="subcategory-grid">
        {category.subcategories.map((sub) => (
          <div key={sub} className="subcategory-card">
            <img
              src={`/assets/products/${sub.toLowerCase()}.jpg`}
              alt={sub}
              className="subcategory-image"
            />
            <h3>{sub}</h3>
            <button
              className="view-button"
              onClick={() =>
                navigate(`/category/${mainCategory}/${sub.toLowerCase()}`)
              }
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
