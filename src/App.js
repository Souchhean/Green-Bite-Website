// src/App.js

import "./App.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ✅ Named imports
import { useData } from "./contexts/DataProvider";
import { useAuth } from "./contexts/AuthProvider";
import { Loader } from "./components/Loader/Loader";
import { NavRoutes } from "./routes/NavRoutes";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";

// ✅ Default imports
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"; // ✅ Corrected default import

function App() {
  const location = useLocation();
  const { loading } = useData();
  const { auth } = useAuth();

  // ✅ Auto scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <ScrollToTop />
      <Header>
        {loading ? <Loader /> : <NavRoutes />}
      </Header>
      <Footer />
    </div>
  );
}

export default App;
