import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre mim</Link>
          </li>
          <li>
            <Link to="/artigos">Artigos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
