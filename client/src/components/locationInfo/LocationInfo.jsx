import "./locationInfo.css"

import React from "react";

import Carousel from "../carousel/Carousel";
import MainInfoContainer from "../mainLocationInfo/MainLocationInfo";
import Tags from "../tags/Tags";
import HostInfo from "../hostInfo/HostInfo";
import Notation from "../notation/Notation";
import Dropdown from "../dropdown/Dropdown";

export default function LocationInfo({location}) {
  return (
    <div className="infoContainer">
        <Carousel location={location} />
        <div className="alignInfo">
          <div className="allInfoContainer">
            <MainInfoContainer location={location} />
            <Tags location={location} />
          </div>

          <div className="otherContainer">
            <HostInfo location={location} />
            <Notation location={location} />
          </div>
        </div>
        <div className="dropdowns">
            <Dropdown>
                <p>Description</p>
                <p>{location.description}</p>
            </Dropdown>
            <Dropdown>
                <p>Équipements</p>
                <ul>
                  {location.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
            </Dropdown>
          </div>
    </div>
  );
}
