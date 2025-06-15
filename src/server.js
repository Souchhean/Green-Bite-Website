// src/server.js

import { Server, Model, RestSerializer } from "miragejs";
import { v4 as uuid } from "uuid";

import {
  loginHandler,
  signupHandler,
} from "./backend/controllers/AuthController";
import {
  addItemToCartHandler,
  getCartItemsHandler,
  removeItemFromCartHandler,
  updateCartItemHandler,
  clearCartHandler,
} from "./backend/controllers/CartController";
import {
  getAllCategoriesHandler,
  getCategoryHandler,
} from "./backend/controllers/CategoryController";
import {
  getAllProductsHandler,
  getProductHandler,
} from "./backend/controllers/ProductController";
import {
  addItemToWishlistHandler,
  getWishlistItemsHandler,
  removeItemFromWishlistHandler,
} from "./backend/controllers/WishlistController";
import {
  getAddressListHandler,
  addAddressHandler,
  removeAddressHandler,
  updateAddressHandler,
} from "./backend/controllers/AddressController";
import {
  getOrderItemsHandler,
  addItemToOrdersHandler,
} from "./backend/controllers/OrderController";

import { products } from "./backend/db/products";
import { users } from "./backend/db/users";
import { seedCategories } from "./backend/db/seedCategories"; // ✅ FIX: use array version for seeding

export function makeServer({ environment = "development" } = {}) {
  return new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    models: {
      product: Model,
      category: Model,
      user: Model,
      cart: Model,
      wishlist: Model,
    },

    seeds(server) {
      server.logging = false;

      // seed products
      products.forEach((item) => {
        server.create("product", { ...item });
      });

      // seed users
      users.forEach((item) =>
        server.create("user", {
          ...item,
          cart: [],
          wishlist: [],
          addressList: [
            {
              _id: uuid(),
              name: "Laothomorn",
              street: "4254 Central Pkwy",
              city: "Port Credit",
              state: "Ontario",
              country: "Canada",
              pincode: "L5G 1K2",
              phone: "905-278-0724",
            },
          ],
        })
      );

      // ✅ FIXED: Use array format for categories
      seedCategories.forEach((item) =>
        server.create("category", { ...item })
      );
    },

    routes() {
      this.namespace = "api";

      this.post("/auth/signup", signupHandler.bind(this));
      this.post("/auth/login", loginHandler.bind(this));

      this.get("/products", getAllProductsHandler.bind(this));
      this.get("/products/:productId", getProductHandler.bind(this));

      this.get("/categories", getAllCategoriesHandler.bind(this));
      this.get("/categories/:categoryId", getCategoryHandler.bind(this));

      this.get("/user/cart", getCartItemsHandler.bind(this));
      this.post("/user/cart", addItemToCartHandler.bind(this));
      this.post("/user/cart/clearCart", clearCartHandler.bind(this));
      this.post("/user/cart/:productId", updateCartItemHandler.bind(this));
      this.delete("/user/cart/:productId", removeItemFromCartHandler.bind(this));

      this.get("/user/wishlist", getWishlistItemsHandler.bind(this));
      this.post("/user/wishlist", addItemToWishlistHandler.bind(this));
      this.delete("/user/wishlist/:productId", removeItemFromWishlistHandler.bind(this));

      this.get("/user/address", getAddressListHandler.bind(this));
      this.post("/user/address", addAddressHandler.bind(this));
      this.post("/user/address/:addressId", updateAddressHandler.bind(this));
      this.delete("/user/address/:addressId", removeAddressHandler.bind(this));

      this.get("/user/orders", getOrderItemsHandler.bind(this));
      this.post("/user/orders", addItemToOrdersHandler.bind(this));
    },
  });
}
