import "./header.css"
import React from "react";

import Logo from "../../assets/MAIN_LOGO.png"

export default function header() {
    const home = e => {
        e.preventDefault() //To prevent the default event
        window.location.href = "/"; //Navigate to home page
    }

    return (
        <div className="headerContainer">
            <img className="logo_header" src={Logo} onClick={home} alt="Logo Kasa"/>
            <li>
                <a href="https://developer.mozilla.org/fr/docs/Web/HTML/Element/a">Accueil</a>
                <a href="https://developer.mozilla.org/fr/docs/Web/HTML/Element/a">A Propos</a>
            </li>
        </div>
      );
}