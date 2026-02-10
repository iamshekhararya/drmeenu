import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ObsGynae from "./components/Homesections/ObsGynae";
import ServiceDetail from "./components/Homesections/serviceDetailsData";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />

        {/* OBS & GYNAE */}
        <Route path="/obs-gynae" element={<ObsGynae />} />
        <Route
          path="/services/:parentSlug/:slug"
          element={<ServiceDetail />}
        />
      </Routes>
    </Router>
  );
}

export default App;
