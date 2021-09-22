import './style.scss';

import menuPlie from './images/menuPlie.png';
import menuDeplie from './images/menuDeplie.png';
import { NavLink } from 'react-router-dom';



const Menu = () => {

    const toggleMenu = () => {
        let menuDeplie = document.getElementById('menuDeplie');
        let menuPlie = document.getElementById('menuPlie');
        menuPlie.classList.toggle('noDisplay');
        menuDeplie.classList.toggle('inactive');
    }

    return (
        <div id="menu">
            <div className="menu inactive menuAppearance" id="menuDeplie">
                <img src={menuDeplie} alt="menu" className="menuImg" />
                <div className="navLinks">
                    <NavLink to="/1" className="links">Lien 1</NavLink>
                    <NavLink to="/2" className="links">Lien 2</NavLink>
                    <NavLink to="/3" className="links">Lien 3</NavLink>
                    <NavLink to="/4" className="links">Lien 4</NavLink>
                </div>
            </div>
            <div className="menu menuAppearance" id="menuPlie">
               <img src={menuPlie} alt="menu" className="menuImg" onClick={toggleMenu} />
            </div>
        </div>    
    )
};

export default Menu;