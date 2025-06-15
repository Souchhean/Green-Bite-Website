// src/routes/NavRoutes.jsx

import React from "react";
import Home from "../pages/Home/Home";
import { Cart } from "../pages/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/auth/Login/Login";
import { ProductListing } from "../pages/ProductListing/ProductListing";
import { ProductDetails } from "../pages/ProductDetails/ProductDetails";
import { RequiresAuth } from "../components/requires-auth/RequiresAuth";
import { Signup } from "../pages/auth/Signup/Signup";
import { Logout } from "../pages/auth/Logout/Logout";
import { Checkout } from "../pages/Checkout/Checkout";
import { Wishlist } from "../pages/Wishlist/Wishlist";
import { UserProfile } from "../pages/UserProfile/UserProfile";
import { Profile } from "../pages/UserProfile/Profile/Profile";
import { Addresses } from "../pages/UserProfile/Addresses/Addresses";
import { Orders } from "../pages/UserProfile/Orders/Orders";
import { PageNotFound } from "../pages/PageNotFound/PageNotFound";

// ✅ Views for category handling
import { MainCategoryView } from "../pages/ProductListing/MainCategoryView";
import { SubcategoryView } from "../pages/ProductListing/SubcategoryView";
import { FlatCategoryView } from "../pages/ProductListing/FlatCategoryView"; // ✅ New

export const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* ✅ Flat categories (no subcategories) */}
      <Route path="/category/study" element={<FlatCategoryView />} />
      <Route path="/category/healthcare" element={<FlatCategoryView />} />

      {/* ✅ Main categories (with subcategories) */}
      <Route path="/category/:mainCategory" element={<MainCategoryView />} />
      <Route path="/category/:mainCategory/:subCategory" element={<SubcategoryView />} />

      <Route
        path="/cart"
        element={
          <RequiresAuth>
            <Cart />
          </RequiresAuth>
        }
      />
      <Route
        path="/wishlist"
        element={
          <RequiresAuth>
            <Wishlist />
          </RequiresAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/product-listing" element={<ProductListing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/product-details/:productId" element={<ProductDetails />} />
      <Route
        path="/checkout"
        element={
          <RequiresAuth>
            <Checkout />
          </RequiresAuth>
        }
      />
      <Route path="/profile" element={<UserProfile />}>
        <Route
          path="/profile/"
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        />
        <Route path="/profile/orders" element={<Orders />} />
        <Route path="/profile/addresses" element={<Addresses />} />
      </Route>

      {/* 🚨 Must be last */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
