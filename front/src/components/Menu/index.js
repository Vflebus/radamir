import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./style.scss";

import menuPlie from "./images/menuPlie.png";
import menuDeplie from "./images/menuDeplie.png";
// import menuMobile from "./images/menuMobile.png";
import menuMobileBarreDessus from "./images/menuMobileBarreDessus.png";
import menuMobileBarreDessous from "./images/menuMobileBarreDessous.png";

const Menu = ({ classes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenuRef = useRef();
  const closedMenuRef = useRef();

  useEffect(() => {
    openMenuRef.current.classList.remove("menuAppearance");
    closedMenuRef.current.classList.remove("menuAppearance");
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
        <div id="menu">
          <div
            className={`menu ${classes} ${isOpen ? "" : "inactive"}`}
            ref={openMenuRef}
          >
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
          <div
            className={`menu cursorPointer ${classes} ${isOpen ? "noDisplay" : ""}`}
            ref={closedMenuRef}
          >
            <img
              src={menuPlie}
              alt="menu"
              className="menuImg"
              onClick={toggleMenu}
            />
          </div>
        </div>
        <div className="menuMobile">
            <div className={`menuMobileToggle ${isOpen ? "boxShadow" : ""}`} onClick={toggleMenu}>
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

Menu.defaultProps = {
  classes: "",
};

export default Menu;
