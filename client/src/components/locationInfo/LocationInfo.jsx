import React, { useEffect, useState } from "react";
import data from "../../data/data.json";

import Carousel from "../carousel/Carousel";
import MainInfoContainer from "../mainLocationInfo/MainLocationInfo";

export default function LocationInfo() {
  const [locations, setLocations] = useState(data);

  useEffect(() => {
    setLocations(data);
  }, []);

  const id = window.location.pathname.split("/").pop();
  const filteredLocation = locations.filter((location) => location.id === id);

  return (
    <div className="infoContainer">
        <Carousel location={filteredLocation[0]} />
        <MainInfoContainer location={filteredLocation[0]} />
    </div>
  );
}
