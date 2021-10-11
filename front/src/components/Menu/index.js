import { useState, useCallback, useEffect } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ConnectionModal from "../ConnectionModal";

import { logout, setInput } from "../../actions/user";
import { clearError } from "../../actions/error";

import "./style.scss";

import menuPlie from "../../assets/images/menuPlie.webp";
import menuDeplie from "../../assets/images/menuDeplie.webp";
import menuMobileBarreDessus from "../../assets/images/menuMobileBarreDessus.webp";
import menuMobileBarreDessous from "../../assets/images/menuMobileBarreDessous.webp";

const Menu = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { logged } = useSelector(({user}) => user);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onModalClose = useCallback(() => {
    dispatch(setInput("", "email"));
    dispatch(setInput("", "password"));
    dispatch(clearError());
    setIsModalOpen(false);
  }, [dispatch]);

  const onLogout = useCallback(() => {
    dispatch(logout());
    if (location.pathname === "/profile") {
      history.push("/");
    }
  }, [dispatch, history, location]);

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
              {logged && (
                <>
                  <NavLink exact to="/profile" className="links" activeClassName="selected">
                    Mon Compte
                  </NavLink>              
                  <button className="links menu-button" onClick={onLogout}>
                    Déconnexion
                  </button>
                </>
              )}
              {!logged && (
                <>
                  <NavLink exact to="/signup" className="links" activeClassName="selected">
                    Inscription
                  </NavLink>
                  <button className="links menu-button" onClick={() => setIsModalOpen(true)}>
                    Connexion
                  </button>
                </>
              )}
              <ConnectionModal open={isModalOpen}  onClose={onModalClose} />
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
              {logged && (
                <>
                  <NavLink exact to="/profile" className="links" activeClassName="selected">
                    Mon Compte
                  </NavLink>              
                  <button className="links menu-button" onClick={onLogout}>
                    Déconnexion
                  </button>
                </>              
              )}
              {!logged && (
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
