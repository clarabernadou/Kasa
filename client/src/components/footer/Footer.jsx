import "./footer.css"
import React from "react";

import Logo from "../../assets/LOGO.png"

export default function footer() {
    const home = e => {
        e.preventDefault() //To prevent the default event
        window.location.href = process.env.PUBLIC_URL + "/"; //Navigate to home page
    }
    return (
        <div className="footerContainer">
            <img className="logo_footer" src={Logo} onClick={home} alt="Logo Kasa"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
      );
}
