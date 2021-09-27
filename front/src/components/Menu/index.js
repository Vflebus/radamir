import { useState } from "react";

import "./style.scss";

import menuPlie from "./images/menuPlie.png";
import menuDeplie from "./images/menuDeplie.png";
import { NavLink } from "react-router-dom";

const Menu = ({ classes }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="menu">
      <div
        className={`menu ${classes} ${isOpen ? "" : "inactive"}`}
      >
        <img src={menuDeplie} alt="menu" className="menuImg" />
        <div className="navLinks">
          <NavLink exact to="/" className="links" activeClassName="selected">
            Accueil
          </NavLink>
          <NavLink to="/wiki" className="links" activeClassName="selected">
            Lien 2
          </NavLink>
          <NavLink to="/3" className="links" activeClassName="selected">
            Lien 3
          </NavLink>
          <NavLink to="/4" className="links" activeClassName="selected">
            Lien 4
          </NavLink>
        </div>
      </div>
      <div
        className={`menu ${classes} ${isOpen ? "noDisplay" : ""}`}
      >
        <img
          src={menuPlie}
          alt="menu"
          className="menuImg"
          onClick={toggleMenu}
        />
      </div>
    </div>
  );
};

Menu.defaultProps = {
  classes: "",
};

export default Menu;
