import "../aboutBars.css";
import React, { useState } from "react";

export default function RespectBar() {

    // Open the bar
    const [isBarOpen, setIsBarOpen] = useState(false);
    const toggleBar = () => {
        setIsBarOpen(!isBarOpen);
    };
    
    return (
        <div className="aboutContainer">
            <button className="aboutBar" onClick={toggleBar}>
                <p>Respect</p>
                {isBarOpen ? (
                    <i className="fas fa-chevron-up"></i>
                    ) : (
                    <i className="fas fa-chevron-down"></i>
                )}
            </button>

            {isBarOpen && 
                <div className="aboutBarOptions">
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>     
                </div>           
            }
        </div>
    );
}
