import "./locationSection.css";
import React, { useEffect } from "react";
import LocationInfo from "../../locationInfo/LocationInfo";
import data from "../../../data/data.json";

export default function LocationInfo({ locations, setLocations }) {
    useEffect(() => {
        setLocations(data);
    }, [setLocations]);

  return (
    <div className="locationSection">
      <div className="location">
        {locations.map((location) => (
          <LocationInfo
            key={location.id}
            location={location}
            setLocations={setLocations}
          />
        ))}
      </div>
    </div>
  );
}

