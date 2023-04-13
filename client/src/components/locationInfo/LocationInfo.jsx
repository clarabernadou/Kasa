import "./locationInfo.css"

import React, { useEffect, useState } from "react";
import data from "../../data/data.json";

import Carousel from "../carousel/Carousel";
import MainInfoContainer from "../mainLocationInfo/MainLocationInfo";
import Tags from "../tags/Tags";
import HostInfo from "../hostInfo/HostInfo";
import Notation from "../notation/Notation";

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
        <div className="alignInfo">
          <div className="allInfoContainer">
            <MainInfoContainer location={filteredLocation[0]} />
            <Tags location={filteredLocation[0]} />
          </div>

          <div className="otherContainer">
            <HostInfo location={filteredLocation[0]} />
            <Notation location={filteredLocation[0]} />
          </div>
        </div>
    </div>
  );
}
