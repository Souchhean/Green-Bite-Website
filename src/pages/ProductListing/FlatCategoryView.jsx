import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import "./ProductListing.css";

export const FlatCategoryView = () => {
  const { mainCategory } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();

        const filtered = data.products.filter(
          (product) =>
            product?.mainCategory?.toLowerCase() === mainCategory.toLowerCase()
        );

        setProducts(filtered);
      } catch (error) {
        console.error("Failed to fetch flat category products:", error);
      }
    };

    fetchData();
  }, [mainCategory]);

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
