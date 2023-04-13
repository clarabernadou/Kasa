import "./tags.css"
import React from "react";

export default function Tags({ location }) {
  return (
    <div className="tagsContainer">
        {location.tags.map((tag, index) => (
            <div className="tag" key={index}>{tag}</div>
        ))}
    </div>
  );
}
