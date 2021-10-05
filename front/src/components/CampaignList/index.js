import CampaignCard from "./CampaignCard";
import "./style.scss"

import bgShip from "../../assets/images/bgShip.png"

const CampaignList = () => {
    return (
        <div className="campaignList">
            <section className="sectionLeft">
                <h1>CAMPAGNES</h1>
                <img src={bgShip} alt="" className="shipImg"/>
            </section>
            <section className="sectionRight">
                <CampaignCard />
                <CampaignCard />
                <CampaignCard />
                <CampaignCard />
                <CampaignCard />
                <CampaignCard />
                <CampaignCard />
                <CampaignCard />
            </section>
        </div>
    )
};

export default CampaignList;