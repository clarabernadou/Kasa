import "./equipmentBar.css";
import React, { useState } from "react";

export default function EquipmentBar( locations ) {
    const location = locations.location

    // Open the bar
    const [isBarOpen, setIsBarOpen] = useState(false);
    const toggleBar = () => {
        setIsBarOpen(!isBarOpen);
    };
    
    return (
        <div className="equipmentContainer">
            <button className="equipmentBar" onClick={toggleBar}>
                <p>Équipements</p>
                {isBarOpen ? (
                    <i className="fas fa-chevron-up"></i>
                    ) : (
                    <i className="fas fa-chevron-down"></i>
                )}
            </button>

            {isBarOpen && 
                <div className="equipmentOptions">
                    <ul>
                        {location.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                </div>           
            }
        </div>
    );
}
