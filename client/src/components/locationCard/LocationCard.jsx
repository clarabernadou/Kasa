import "./locationCard.css"
// import React from "react"

export default function LocationCard( locations, setLocations ) {
    const location = locations.location
    // const id = location.id

    console.log(location);
    
    return (
        <div className="location" style={{ backgroundImage: `url(${location.cover})` }}>
        <div className="locationBottom">
            <p>{location.title}</p>
        </div>
        </div>
    )
}