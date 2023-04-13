import "../aboutBars.css";
import React, { useState } from "react";

export default function FiabilityBar() {
     // Open the bar
    const [isBarOpen, setIsBarOpen] = useState(false);
    const toggleBar = () => {
        setIsBarOpen(!isBarOpen);
    };
    
    return (
        <div className="aboutContainer">
            <button className="aboutBar" onClick={toggleBar}>
                <p>Fiabilité</p>
                {isBarOpen ? (
                    <i className="fas fa-chevron-up"></i>
                    ) : (
                    <i className="fas fa-chevron-down"></i>
                )}
            </button>

            {isBarOpen && 
                <div className="aboutBarOptions">
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>     
                </div>           
            }
        </div>
    );
}
