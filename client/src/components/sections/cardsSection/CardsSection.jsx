import "./cardsSection.css";
import React, { useEffect } from "react";
import LocationCard from "../../locationCard/LocationCard";
import data from "../../../data/data.json";

export default function CardsSection({ locations, setLocations }) {
    useEffect(() => {
        setLocations(data);
    }, [setLocations]);

  return (
    <div className="cardsSection">
      <div className="cards">
        {locations.map((location) => (
          <LocationCard
            key={location.id}
            location={location}
            setLocations={setLocations}
          />
        ))}
      </div>
    </div>
  );
}

