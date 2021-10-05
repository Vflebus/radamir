import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ConnectionModal from "../ConnectionModal";

import { logout } from "../../actions/user";

import "./style.scss";

import menuPlie from "../../assets/images/menuPlie.webp";
import menuDeplie from "../../assets/images/menuDeplie.webp";
import menuMobileBarreDessus from "../../assets/images/menuMobileBarreDessus.webp";
import menuMobileBarreDessous from "../../assets/images/menuMobileBarreDessous.webp";

const Menu = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLogged = useSelector(({user}) => user.logged);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
        <div id="menu">
          <div className={`menu ${isOpen ? "" : "inactive"}`}>
            <img src={menuDeplie} alt="menu" className="menuImg" />
            <div className="navLinks">
              <NavLink exact to="/carte" className="links" activeClassName="selected">
                Carte du Monde
              </NavLink>
              <NavLink exact to="/wiki" className="links" activeClassName="selected">
                Wiki
              </NavLink>
              <NavLink exact to="/campagnes" className="links" activeClassName="selected">
                Campagnes
              </NavLink>
              {isLogged && (
                <button className="links menu-button" onClick={() => dispatch(logout())}>
                  Déconnexion
                </button>
              )}
              {!isLogged && (
                <>
                  <NavLink exact to="/signup" className="links" activeClassName="selected">
                    Inscription
                  </NavLink>
                  <button className="links menu-button" onClick={() => setIsModalOpen(true)}>
                    Connexion
                  </button>
                </>
              )}
              <ConnectionModal open={isModalOpen}  onClose={() => setIsModalOpen(false)} />
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
            <NavLink exact to="/carte" className="links" activeClassName="selected">
                Carte du Monde
              </NavLink>
              <NavLink exact to="/wiki" className="links" activeClassName="selected">
                Wiki
              </NavLink>
              <NavLink exact to="/campagnes" className="links" activeClassName="selected">
                Campagnes
              </NavLink>
              {isLogged && (
                <button className="links menu-button" onClick={() => dispatch(logout())}>
                  Déconnexion
                </button>
              )}
              {!isLogged && (
                <>
                  <NavLink exact to="/signup" className="links" activeClassName="selected">
                    Inscription
                  </NavLink>
                  <button className="links menu-button" onClick={() => setIsModalOpen(true)}>
                    Connexion
                  </button>
                </>
              )}
            </div>
        </div>
    </div>
  );
};

export default Menu;
