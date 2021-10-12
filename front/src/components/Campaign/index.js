import { useParams } from "react-router";
import { useSelector } from "react-redux";

import carte from "../../assets/images/CarteRadamir.png";
import bg2 from "../../assets/images/bg2.png";

import "./campaign.scss";

import Note from "./Note";

const Campaign = () => {
    const { id } = useParams();
    const { list } = useSelector(({ campaigns }) => campaigns);

    const userCampaign = list.find(campaign => campaign.id === +id);
    
    return (
        <div className="campaign">
            <h1>{userCampaign.campaign_name}</h1>
            <section className="pageOne">
                <section className="sectionCarte">
                    <img src={carte} alt="" />
                </section>
                <section className="sectionResume">
                    <h2>Jusqu'ici :</h2>
                    <p>{userCampaign.description}</p>
                </section>
            </section>
            <section className="pageTwo">
                <img src={bg2} alt="" className="bg2"/>
                <h2>Notes</h2>
                <section className="allNotes">
                    <section className="notesPrivees">
                        <h3>Privées</h3>
                        <Note />
                        <Note />
                        <Note />
                        <Note />
                    </section>
                    <section className="notesPubliques">
                        <h3>Publiques</h3>
                        <Note />
                        <Note />
                        <Note />
                        <Note />
                        <Note />
                    </section>
                    <section className="imageDiscord">
                        <h3>Illustration actuelle</h3>
                        <img src="https://cdn.discordapp.com/attachments/837830452042661899/897226129709096960/Cennetig_le_Minutieux.jpg" alt="" className="discordImg"/>
                    </section>
                </section>
                <button className="addNote">Ajouter une nouvelle note</button>
            </section>
        </div>
    )
};

export default Campaign;