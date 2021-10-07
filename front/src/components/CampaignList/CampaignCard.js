import { Link } from "react-router-dom";

import plank from "../../assets/images/plank.png"
import wikiParchment from "../../assets/images/wikiParchment.webp"

const CampaignCard = () => {
    return (
        <div className="card">
            <Link to="/campagnes/campagne1">
                <img src={plank} alt="" className="__image" />
                <h3>Les dernières Demeures des Dieux</h3>
                {/* <button className="link">Accéder à la campagne</button></Link> */}
            </Link>    
        </div>
    )
}

export default CampaignCard