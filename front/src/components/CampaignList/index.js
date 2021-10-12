import CampaignCard from "./CampaignCard";
import MotionWrapper from "../MotionWrapper";

import "./style.scss"

import bgShip from "../../assets/images/bgShip.png"

import data from "./data"

const CampaignList = () => {
    return (
        <MotionWrapper>
            <div className="campaignList">
                <h1>CAMPAGNES</h1>
                <section className="sectionLeft">
                    <img src={bgShip} alt="" className="shipImg"/>
                </section>
                <section className="sectionRight">
                    <section className="campaignsContainer">

                        {data.map(({campaign_name}) => <CampaignCard name={campaign_name} key={campaign_name}/>)}

                        {/* <CampaignCard name="Campagne 1"/>
                        <CampaignCard name="Campagne 2"/>
                        <CampaignCard name="Campagne 3"/>
                        <CampaignCard name="Campagne 4"/>
                        <CampaignCard name="Campagne 5"/>
                        <CampaignCard name="Campagne 6"/>
                        <CampaignCard name="Campagne 7"/>
                        <CampaignCard name="Campagne 8"/>
                        <CampaignCard name="Campagne 9"/>
                        <CampaignCard name="Campagne 10"/>
                        <CampaignCard name="Campagne 11"/>
                        <CampaignCard name="Campagne 12"/> */}
                    </section>
                    <button className="addCampaign">Créer une campagne</button>
                </section>
            </div>
        </MotionWrapper>
    );
};

export default CampaignList;