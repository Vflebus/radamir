import './style.scss';

import menuPlie from './images/menuPlie.png';
import menuDeplie from './images/menuDeplie.png';
import { NavLink } from 'react-router-dom';



const Menu = ( {classes} ) => {

    const toggleMenu = () => {
        let menuDeplie = document.getElementById('menuDeplie');
        let menuPlie = document.getElementById('menuPlie');
        menuPlie.classList.toggle('noDisplay');
        menuDeplie.classList.toggle('inactive');
    }

    return (
        <div id="menu">
            <div className={"menu inactive "+classes} id="menuDeplie">
                <img src={menuDeplie} alt="menu" className="menuImg" />
                <div className="navLinks">
                    <NavLink exact to="/" className="links" activeClassName="selected">Accueil</NavLink>
                    <NavLink exact to="/wiki" className="links" activeClassName="selected">Lien 2</NavLink>
                    <NavLink exact to="/3" className="links" activeClassName="selected">Lien 3</NavLink>
                    <NavLink exact to="/4" className="links" activeClassName="selected">Lien 4</NavLink>
                </div>
            </div>
            <div className={"menu "+classes} id="menuPlie">
               <img src={menuPlie} alt="menu" className="menuImg" onClick={toggleMenu} />
            </div>
        </div>    
    )
};

export default Menu;