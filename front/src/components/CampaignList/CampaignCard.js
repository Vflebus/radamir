import { Link } from "react-router-dom";

import { cleanTitleSlug } from "../../selectors/wikis";

import plank from "../../assets/images/plank.png"
// import wikiParchment from "../../assets/images/wikiParchment.webp"

const CampaignCard = ( {name} ) => {
    const { slug } = cleanTitleSlug(name);                  
                    
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