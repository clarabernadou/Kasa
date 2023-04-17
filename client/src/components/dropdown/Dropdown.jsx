import React, { useState } from "react";

export default function Dropdown({ children }) {
    const [isBarOpen, setIsBarOpen] = useState(false);
    const toggleBar = () => {
      setIsBarOpen(!isBarOpen);
    };
    return (
      <div className="dropdownContainer">
        <div className="dropdown" onClick={toggleBar}>
          {children[0]}
          {isBarOpen ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
        </div>
  
        {isBarOpen && <div className="dropdownOptions">{children[1]}</div>}
      </div>
    );
}
