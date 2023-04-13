import "../bars.css";
import React, { useState } from "react";

export default function DesciptionBar( locations ) {
    const location = locations.location

    // Open the bar
    const [isBarOpen, setIsBarOpen] = useState(false);
    const toggleBar = () => {
        setIsBarOpen(!isBarOpen);
    };
    
    return (
        <div className="barsContainer">
            <button className="bar" onClick={toggleBar}>
                <p>Description</p>
                {isBarOpen ? (
                    <i className="fas fa-chevron-up"></i>
                    ) : (
                    <i className="fas fa-chevron-down"></i>
                )}
            </button>

            {isBarOpen && 
                <div className="barOptions">
                    <p>{location.description}</p>     
                </div>           
            }
        </div>
    );
}
