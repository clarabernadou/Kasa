import "./cardsSection.css";
import React from "react";
import LocationCard from "../../locationCard/LocationCard";

export default function CardsSection({ locations }) {
  return (
    <div className="cardsSection">
      <div className="cards">
        {locations.map((location) => (
          <LocationCard
            key={location.id}
            location={location}
          />
        ))}
      </div>
    </div>
  );
}
