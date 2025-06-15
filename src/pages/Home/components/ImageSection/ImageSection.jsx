import React from "react";
import "./ImageSection.css";
import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router-dom";

export const ImageSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="Img-container">
        <Tilt transitionSpeed={1000} scale={1.07} className="Img-card">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/products-images/image-men-7.png`}
            alt="Aether Ultra Pro"
            onClick={() => navigate("/product-details/26")}
            width="100%"
          />
          <h3>Aether Ultra Pro</h3>
          <span className="notch"></span>
        </Tilt>{" "}
        <Tilt transitionSpeed={1000} scale={1.07} className="Img-card">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/products-images/image-men-20.png`}
            alt="Vanguard Accelerate"
            onClick={() => navigate("/product-details/39")}
            width="100%"
          />
          <h3>Vanguard Accelerate</h3>
          <span className="notch"></span>
        </Tilt>
        <Tilt transitionSpeed={1000} scale={1.07} className="Img-card">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/products-images/image-men-31.png`}
            alt="Luminary Synthesis"
            onClick={() => navigate("/product-details/50")}
            width="100%"
          />
          <h3>Luminary Synthesis</h3>
          <span className="notch"></span>
        </Tilt>
        <Tilt transitionSpeed={1000} scale={1.07} className="Img-card">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/products-images/image-women-29.png`}
            alt="Ascend Quantum"
            onClick={() => navigate("/product-details/76")}
            width="100%"
          />
          <h3>Ascend Quantum</h3>
          <span className="notch"></span>
        </Tilt>
      </div>
    </>
  );
};
