import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./style.scss";

import menuPlie from "../../assets/images/menuPlie.webp";
import menuDeplie from "../../assets/images/menuDeplie.webp";
import menuMobileBarreDessus from "../../assets/images/menuMobileBarreDessus.webp";
import menuMobileBarreDessous from "../../assets/images/menuMobileBarreDessous.webp";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
        <div id="menu">
          <div className={`menu ${isOpen ? "" : "inactive"}`}>
            <img src={menuDeplie} alt="menu" className="menuImg" />
            <div className="navLinks">
              <NavLink exact to="/" className="links" activeClassName="selected">
                Accueil
              </NavLink>
              <NavLink exact to="/wiki" className="links" activeClassName="selected">
                Wiki
              </NavLink>
              <NavLink exact to="/3" className="links" activeClassName="selected">
                Lien 3
              </NavLink>
              <NavLink exact to="/4" className="links" activeClassName="selected">
                Lien 4
              </NavLink>
            </div>
          </div>
          <div className={`menu cursorPointer ${isOpen ? "noDisplay" : ""}`}>
            <img
              src={menuPlie}
              alt="menu"
              className="menuImg"
              onClick={toggleMenu}
            />
          </div>
        </div>
        <div className={`menuMobile ${isOpen ? "boxShadow" : ""}`}>
            <div className="menuMobileToggle" onClick={toggleMenu}>
                <img src={menuMobileBarreDessus} alt="Ouvrir le menu de navigation" className={`menuMobileToggle__barreDessus ${isOpen ? "openedDessus" : ""}`}/>
                <img src={menuMobileBarreDessous} alt="Ouvrir le menu de navigation" className={`menuMobileToggle__barreDessous ${isOpen ? "openedDessous" : ""}`}/>
            </div>
            <img src={menuDeplie} alt="" className={`navLinksMobile__img ${isOpen ? "" : "displayNone"}`} />
            <div className={`navLinksMobile ${isOpen ? "" : "displayNone"}`}>
                <NavLink exact to="/" className="links" activeClassName="selected">
                    Accueil
                </NavLink>
                <NavLink exact to="/wiki" className="links" activeClassName="selected">
                    Wiki
                </NavLink>
                <NavLink exact to="/3" className="links" activeClassName="selected">
                    Lien 3
                </NavLink>
                <NavLink exact to="/4" className="links" activeClassName="selected">
                    Lien 4
                </NavLink>
            </div>
        </div>
    </div>
  );
};

export default Menu;
