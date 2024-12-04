import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";

// import HideNavbar from "./components/hidenavbar/HideNavbar";

import { UserContext } from "./components/context/UserContext";
import Head from "./components/header/head/Head";
// import SearchResult from "./pages/sear-result/SearchResult";
// import { useContext, useState } from "react";
// import Loader from "./components/loader/Loader";

import ScrollToTop from "./components/context/ScrollToTop";
import Applicants from "./pages/application_data/Applicants";

function App() {
  // const { user } = useContext(UserContext);
  return (
    // <UserContextProvider>
    <Router>
      <ScrollToTop>
        <Head />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/applicants" element={<Applicants />} />
        </Routes>
      </ScrollToTop>
    </Router>
    // </UserContextProvider>
  );
}

export default App;
