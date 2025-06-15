// src/components/ProductCard.jsx

import React, { useState } from "react";
import "./ProductCard.css";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { name, image, pricePerGram } = product;
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const pricePerKg = pricePerGram ? (pricePerGram * 1000).toFixed(2) : null;

  return (
    <div className="styled-card">
      <img src={image} alt={name} className="styled-image" />
      <h3 className="product-name">{name}</h3>

      {pricePerKg ? (
        <p className="price">${pricePerKg} / kg</p>
      ) : (
        <p className="price unavailable">Price unavailable</p>
      )}

      <div className="styled-controls">
        <button onClick={handleDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrease}>+</button>
      </div>

      <button className="styled-add">Add to Cart</button>

      <div className="wishlist-icon">
        <FaHeart />
      </div>
    </div>
  );
};

export default ProductCard;
