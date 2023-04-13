import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import LocationInfo from "./pages/locationInfo/LocationInfo"
import AboutUs from "./pages/aboutUs/AboutUs";

function App() {
  const id = window.location.pathname.split('/').pop();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/location/${id}`} element={<LocationInfo />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
);
}

export default App;
