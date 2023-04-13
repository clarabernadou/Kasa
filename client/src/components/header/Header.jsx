import React from "react";
import { useLocation } from "react-router-dom";

import Logo from "../../assets/MAIN_LOGO.png";
import "./header.css";

export default function Header() {
  const home = (e) => {
    e.preventDefault(); // To prevent the default event
    window.location.href = "/"; // Navigate to home page
  };

  const location = useLocation();
  const homePath = location.pathname === "/";
  const aboutUsPath = location.pathname === "/about-us";

  return (
    <div className="headerContainer">
      <img className="logo_header" src={Logo} onClick={home} alt="Logo Kasa" />
      <li>
        <a href="/" style={{ textDecoration: homePath ? "underline" : "none" }}>
          Accueil
        </a>
        <a href="/about-us" style={{ textDecoration: aboutUsPath ? "underline" : "none" }}>
          A Propos
        </a>
      </li>
    </div>
  );
}
