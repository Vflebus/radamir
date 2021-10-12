// import { useParams } from "react-router";
import data from "./data";

import carte from "../../assets/images/CarteRadamir.png";
import bg2 from "../../assets/images/bg2.png";

import "./campaign.scss";

import Note from "./Note";

const Campaign = () => {
    
    const campaignData = data;
    console.log(data);

    return (
        <div className="campaign">
            <h1>{campaignData.campaign_name}</h1>
            <section className="pageOne">
                <section className="sectionCarte">
                    <img src={carte} alt="" />
                </section>
                <section className="sectionResume">
                    <h2>Jusqu'ici :</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam tenetur vitae officia libero velit consequatur. Numquam aliquid, vero voluptates ipsam blanditiis doloribus error repellendus ea, rem nisi autem. Fugit aliquam minima officia consectetur maiores! Iure ducimus repellendus cumque? Blanditiis perspiciatis corrupti delectus, excepturi consectetur, consequuntur aliquid doloremque dignissimos, rerum ullam deserunt est? Totam laudantium fugit dolor adipisci explicabo similique repudiandae nobis porro eveniet nulla deleniti in velit, natus alias. Consequuntur at cumque labore deleniti ea illum ex laudantium voluptatibus necessitatibus molestiae dignissimos assumenda explicabo officia corporis animi facere aliquam incidunt, sapiente itaque illo quos voluptas quidem inventore aut? Officiis culpa soluta quibusdam provident necessitatibus aliquam tempora libero ratione deleniti suscipit voluptatum repudiandae velit, eaque inventore officia asperiores veritatis et non, nobis assumenda ullam quasi! Error repellat hic distinctio accusantium iste. Quas excepturi delectus, sed nulla porro quae ipsam culpa optio tempore possimus reprehenderit? Temporibus pariatur harum quia ipsa eius, quis recusandae neque quos ab esse debitis error nulla aspernatur corrupti quasi id delectus sint ipsum facilis ullam commodi? Doloremque sequi, distinctio minima neque assumenda iure alias asperiores et fugiat consectetur dolorum reprehenderit, maxime facere libero nisi saepe voluptatem dolore. Illo nesciunt doloribus culpa accusantium sint eos velit facilis, ex asperiores!</p>
                </section>
            </section>
            {/* <section className="pageTwo">
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
            </section> */}
        </div>
    )
};

export default Campaign;