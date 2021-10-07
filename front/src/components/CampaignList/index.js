import CampaignCard from "./CampaignCard";
import MotionWrapper from "../MotionWrapper";

import "./style.scss"

import bgShip from "../../assets/images/bgShip.png"

const CampaignList = () => {
    return (
        <MotionWrapper>
            <div className="campaignList">
                <h1>CAMPAGNES</h1>
                <section className="sectionLeft">
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
                    <CampaignCard />
                    <CampaignCard />
                    <CampaignCard />
                    <CampaignCard />
                    <CampaignCard />
                    <CampaignCard />
                    <CampaignCard />
                    <CampaignCard />
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
        </MotionWrapper>
    );
};

export default CampaignList;