import "./locationSection.css";
import React, { useEffect } from "react";

import LocationInfo from "../../locationInfo/LocationInfo";
import Tag from "../../tags/Tag";
import EquipmentBar from "../../bars/equipmentBar/EquipmentBar";
import DescriptionBar from "../../bars/descriptionBar/DescriptionBar";

import data from "../../../data/data.json";

export default function LocationSection({ locations, setLocations }) {
  useEffect(() => {
    setLocations(data);
  }, [setLocations]);

  const id = window.location.pathname.split("/").pop();
  const filteredLocation = locations.filter((location) => location.id === id);

  return (
    <div className="infoSection">
      <div className="mainInfo">
        <LocationInfo location={filteredLocation[0]} />
      </div>
      <div className="tagsInfo">
        <Tag location={filteredLocation[0]}/>
      </div>
      <div className="bars">
        <EquipmentBar location={filteredLocation[0]} />
        <DescriptionBar location={filteredLocation[0]} />
      </div>
    </div>
  );
}