import "./locationCard.css"
// import React from "react"

export default function LocationCard( locations, setLocations ) {
    const location = locations.location

    const handleClick = (event) => {
        console.log(location.id);
        window.location.href = `/location/${location.id}`;
    };

    return (
        <div className="location" id={location.id} style={{ backgroundImage: `url(${location.cover})` }} onClick={handleClick}>
        <div className="locationBottom">
            <p>{location.title}</p>
        </div>
        </div>
    )
}