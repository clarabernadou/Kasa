import React from "react";
import "./locationInfo.css";

export default function LocationInfo( locations ) {
    const location = locations.location
    console.log(location);
  return (
    <div className="locationInfoContainer">
        {/* <h1>{location.title}</h1>
        <p>{location.location}</p> */}
    </div>
  );
}
