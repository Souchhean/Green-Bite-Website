// src/components/Header/Header.jsx

import React, { useState } from "react";
import "./Header.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useData } from "../../contexts/DataProvider";
import { useAuth } from "../../contexts/AuthProvider";
import { useUserData } from "../../contexts/UserDataProvider";

import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { GrSearch } from "react-icons/gr";

const Header = ({ children }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { auth } = useAuth();
  const { dispatch } = useData();
  const navigate = useNavigate();
  const { userDataState } = useUserData();

  const totalProductsInCart = userDataState.cartProducts?.reduce(
    (acc, curr) => acc + curr.qty,
    0
  );

  const totalProductsInWishlist = userDataState.wishlistProducts?.length || 0;

  return (
    <div className="layout-container">
      <div className="layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="logo-container">
            <img
              src="/assets/GreenBite.png"
              alt="Green Bite Logo"
              className="logo-img"
            />
            <h2 className="logo-text">Green Bite</h2>
          </div>

          <div className="search-wrapper">
            <input
              type="text"
              className="search-box"
              placeholder="Search..."
              onChange={(e) =>
                dispatch({ type: "SEARCH", payload: e.target.value })
              }
              onKeyDown={(e) =>
                e.key === "Enter" && navigate("/product-listing")
              }
            />
            <button className="search-btn">
              <GrSearch />
            </button>
          </div>

          <div className="category-dropdown">
            <div
              className="category-label"
              onClick={() => setShowDropdown((prev) => !prev)}
              style={{ cursor: "pointer", fontWeight: "bold" }}
            >
              Category ▼
            </div>

            {showDropdown && (
              <ul className="category-list">
                <li><Link to="/category/all">All</Link></li>
                <li><Link to="/category/food">Food</Link></li>
                <li><Link to="/category/groceries">Groceries</Link></li>
                <li><Link to="/category/study">Study Supply</Link></li>
                <li><Link to="/category/clothing">Clothing</Link></li>
                <li><Link to="/category/skincare">Skincare</Link></li>
                <li><Link to="/category/healthcare">Healthcare</Link></li>
              </ul>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <div className="main-content-wrapper">
          <nav className="navbar">
            <div className="navbar-center">
              <NavLink to="/">Home</NavLink>
              <span>|</span>
              <NavLink to="/About">About</NavLink>
              <span>|</span>
              <NavLink to="/Contact">Contact</NavLink>
              <span>|</span>
              <NavLink to={auth.isAuth ? "/profile" : "/login"}>
                {auth.isAuth ? "Profile" : "Account"}
              </NavLink>
            </div>

            <div className="navbar-right">
              <NavLink to="/wishlist" className="icon-wrapper">
                <FaHeart className="icon" />
                {totalProductsInWishlist > 0 && (
                  <span className="badge">{totalProductsInWishlist}</span>
                )}
              </NavLink>
              <NavLink to="/cart" className="icon-wrapper">
                <FaShoppingCart className="icon" />
                {totalProductsInCart > 0 && (
                  <span className="badge">{totalProductsInCart}</span>
                )}
              </NavLink>
            </div>
          </nav>

          <div className="page-content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
