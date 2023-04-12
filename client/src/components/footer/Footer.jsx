import "./footer.css"
import React from "react";

import Logo from "../../assets/LOGO.png"

export default function footer() {
    return (
        <div className="footerContainer">
            <img className="logo" src={Logo} alt="Logo Kasa"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
      );
}