import React from "react";
import { Link } from "react-router-dom";
import YogaIcone from "../assets/icon/yoga.png";
import NataIcone from "../assets/icon/natation.png";
import VeloIcone from "../assets/icon/velo.png";
import MuscuIcone from "../assets/icon/musculation.png";
function Navlat() {
  return (
    <div>
      <nav className="nav-lat">
        <ul className="nav-lat-list">
          <li>
            <Link to="/">
              <img src={YogaIcone} alt=""></img>
            </Link>
          </li>
          <li>
            <Link to="/profils">
              <img src={NataIcone} alt=""></img>
            </Link>
          </li>
          <li>
            <Link to="/reglage">
              <img src={VeloIcone} alt=""></img>
            </Link>
          </li>
          <li>
            <Link to="/communaute">
              <img src={MuscuIcone} alt=""></img>
            </Link>
          </li>
        </ul>
        <div className="copyright">
          <p>Copiryght, SportSee 2020</p>
        </div>
      </nav>
    </div>
  );
}
export default Navlat;
