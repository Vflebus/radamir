import { Link } from "react-router-dom";

import plank from "../../assets/images/plank.png"
// import wikiParchment from "../../assets/images/wikiParchment.webp"

const CampaignCard = ( {name} ) => {
    const slug = name.replaceAll(/[^A-zÀ-ü0-9\s_-]/g, "")
                            .replaceAll(" ", "-")
                            .toLowerCase();
                    
                    
    return (
        <div className="card">
            <Link to={`/campagnes/${slug}`}>
                <img src={plank} alt="" className="__image" />
                <h3>{name}</h3>
                {/* <button className="link">Accéder à la campagne</button></Link> */}
            </Link>    
        </div>
    )
}

export default CampaignCard