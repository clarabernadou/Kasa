import "../aboutBars.css";
import React, { useState } from "react";

export default function ServiceBar() {
    // Open the bar
    const [isBarOpen, setIsBarOpen] = useState(false);
    const toggleBar = () => {
        setIsBarOpen(!isBarOpen);
    };
    
    return (
        <div className="aboutContainer">
            <button className="aboutBar" onClick={toggleBar}>
                <p>Service</p>
                {isBarOpen ? (
                    <i className="fas fa-chevron-up"></i>
                    ) : (
                    <i className="fas fa-chevron-down"></i>
                )}
            </button>

            {isBarOpen && 
                <div className="aboutBarOptions">
                    <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>     
                </div>           
            }
        </div>
    );
}
