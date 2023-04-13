import "./hostInfo.css"
import React from "react";

export default function HostInfo({ location }) {
  const host = location.host
  return (
    <div className="hostContainer">
        <div className="hostInfo">
            <p>{host.name}</p>
            <img src={host.picture} alt=""/>
         </div>
    </div>
  );
}
