import React from "react";

export default function MainInfoContainer({ location }) {
  return (
    <div className="mainInfoContainer">
        <h1>{location.title}</h1>
        <p>{location.location}</p>
    </div>
  );
}
