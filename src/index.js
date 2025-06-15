import React from "react";
import ReactDOM from "react-dom/client"; // ✅ React 18 API
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";

import { DataProvider } from "./contexts/DataProvider";
import { AuthProvider } from "./contexts/AuthProvider";
import { UserProvider } from "./contexts/UserDataProvider";
import { AddressProvider } from "./contexts/AddressProvider";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ ONLY this should remain
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <DataProvider>
          <UserProvider>
            <AddressProvider>
              <App />
            </AddressProvider>
          </UserProvider>
        </DataProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
