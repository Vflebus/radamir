import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import plank from "../../assets/images/plank.png";
// import wikiParchment from "../../assets/images/wikiParchment.webp"

const CampaignCard = ({ name, campaignId }) => {                 
    return (
        <div className="card">
            <Link to={`/campagnes/${campaignId}`}>
                <img src={plank} alt="" className="__image" />
                <h3>{name}</h3>
                {/* <button className="link">Accéder à la campagne</button></Link> */}
            </Link>    
        </div>
    )
};

CampaignCard.propTypes = {
    name: PropTypes.string.isRequired,
    campaignId: PropTypes.number.isRequired
};

export default CampaignCard;