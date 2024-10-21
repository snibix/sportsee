import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.png";
const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <img src={logo} className="nav-list-logo" alt=""></img>
        <div className="nav-list-li">
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/profils">Profils</NavLink>
          </li>
          <li>
            <NavLink to="/reglage">Réglage</NavLink>
          </li>
          <li>
            <NavLink to="/communaute">Communauté</NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
