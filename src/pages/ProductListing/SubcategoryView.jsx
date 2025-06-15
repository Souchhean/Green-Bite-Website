// src/pages/ProductListing/SubcategoryView.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import "./ProductListing.css";

export const SubcategoryView = () => {
  const { mainCategory, subCategory } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();

        console.log("Fetched products:", data.products);

        const filtered = data.products.filter((product) => {
          const main = product?.mainCategory?.toLowerCase();
          const sub = product?.subCategory?.toLowerCase();
          const matchMain = main === mainCategory;

          // If subCategory is defined in the URL, match it too
          if (subCategory) {
            return matchMain && sub === subCategory;
          }

          // If no subCategory (like for study), just match mainCategory
          return matchMain;
        });

        setProducts(filtered);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchData();
  }, [mainCategory, subCategory]);

  if (products.length === 0) {
    return <p style={{ padding: "20px" }}>No products found.</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product._id || product.id} product={product} />
      ))}
    </div>
  );
};
