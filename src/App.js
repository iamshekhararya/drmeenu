import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ObsGynae from "./components/Homesections/ObsGynae";
import ServiceDetail from "./components/Homesections/serviceDetailsData";
import FemaleInfertilityDetail from "./components/Homesections/FemaleInfertilityDetail";
import Obs from "./pages/obs-gynae";
import FemaleInfertility from "./components/FemaleInfertilitycomponent";
import TestimonialSection from "./pages/testimoniyal";
import About from "./pages/about";
import ContactUs from "./pages/contactus";
import AnimatedObsp from "./pages/mypersonal";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />

        {/* OBS & GYNAE */}
        <Route path="/obs" element={<ObsGynae />} />
        <Route path="/obs-gynae/:parentSlug/:slug" element={<ServiceDetail />} />
        
        <Route
          path="/female-infertility/:slug"
          element={<FemaleInfertilityDetail />}
        />
        <Route path="/about-us" element={<About/>}/>
        <Route path="/obs-gynae" element ={<Obs/>}/>
        <Route path="/female-infertility" element={<FemaleInfertility/>}/>
        <Route path="/testimonial" element = {<TestimonialSection/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
      </Routes>
    </Router>
  );
}

export default App;
