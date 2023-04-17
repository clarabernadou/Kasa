import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Location from "./pages/location/Location"
import AboutUs from "./pages/aboutUs/AboutUs";
import NotFound from "./pages/notFound/NotFound";

import data from "./data/data.json"

function App() {
  const id = window.location.pathname.split('/').pop();
  const location = data.find((loc) => loc.id === id);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home locations={data} />} />
        <Route path={`/location/${id}`} element={<Location location={location} />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
