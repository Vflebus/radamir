import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import CampaignCard from "./CampaignCard";
import MotionWrapper from "../MotionWrapper";
import AddCampaignModal from "../AddCampaignModal";

import { setCampaignInput } from "../../actions/campaigns";

import "./style.scss"

import bgShip from "../../assets/images/bgShip.png"

// import data from "./data"

const CampaignList = () => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { list } = useSelector(({ campaigns }) => campaigns);

    const handleClose = () => {
        setIsModalOpen(false);
        dispatch(setCampaignInput("campaign_name", ""));
        dispatch(setCampaignInput("description", ""));
    };

    return (
        <MotionWrapper>
            <div className="campaignList">
                <h1>CAMPAGNES</h1>
                <section className="sectionLeft">
                    <img src={bgShip} alt="" className="shipImg"/>
                </section>
                <section className="sectionRight">
                    <section className="campaignsContainer">
                        {list.map(({campaign_name, id}) => <CampaignCard name={campaign_name} campaignId={id} key={id}/>)}
                    </section>
                    <button type="button" className="addCampaign" onClick={() => setIsModalOpen(true)}>Créer une campagne</button>
                    <AddCampaignModal open={isModalOpen} onClose={handleClose} />
                </section>
            </div>
        </MotionWrapper>
    );
};

export default CampaignList;