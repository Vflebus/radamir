import { Link } from "react-router-dom";
import "./TermsAndAboutLinks.scss"

const TermsAndAboutLinks = () => {
    return (
        <footer className="uselessNavBar">
            <ul>
                <Link to="/about">
                    <li className="uselessNavBar__link">
                        A propos
                    </li>
                </Link>    
                <Link to="/terms">
                    <li className="uselessNavBar__link">
                        Mentions légales
                    </li>
                </Link>
            </ul>
        </footer>
    )
};

export default TermsAndAboutLinks
