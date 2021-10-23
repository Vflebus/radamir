import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import socketIOClient from "socket.io-client";

import MotionWrapper from "../MotionWrapper";
import ConfirmDelete from "../ConfirmDelete";
import EditCampaignModal from "../EditCampaignModal";
import Loading from "../Loading";
import AddNoteModal from "../AddNoteModal";

import { deleteCampaign, setCampaignInput } from "../../actions/campaigns";
import { clearError } from "../../actions/error";

import { setTitle, setType, setContent, fetchNotes } from "../../actions/notes";

import carte from "../../assets/images/CarteRadamir.png";
import bg2 from "../../assets/images/bg2.png";

import "./campaign.scss";

import Note from "./Note";

const Campaign = () => {
    const ENDPOINT = "http://164.90.223.174:4001/";
    const dispatch = useDispatch();
    const history = useHistory();
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const { id } = useParams();
    const userId = useSelector(({ user: { loggedUser } }) => loggedUser.id);
    const { list } = useSelector(({ campaigns }) => campaigns);
    const { loading } = useSelector(({ notes }) => notes);
    const campaignLoader = useSelector(({ campaigns }) => campaigns.loading);

    const currentCampaign = list.find(campaign => campaign.id === +id);

    const [imgUrl, setImgUrl] = useState("https://cdn.discordapp.com/attachments/837830452042661899/897226129709096960/Cennetig_le_Minutieux.jpg");
    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on("ImgUrl", data => {
          setImgUrl(data);
          console.log(data)

          return () => socket.disconnect();
        })
    })

    const handleDelete = () => {
        dispatch(deleteCampaign(userId, +id));
        history.push("/campagnes");
    };

    const handleOpenEdit = () => {
        dispatch(setCampaignInput("campaign_name", currentCampaign.campaign_name));
        dispatch(setCampaignInput("description", currentCampaign.description));
        setEditOpen(true);
    };

    const handleCloseEdit = () => {
        dispatch(clearError());
        dispatch(setCampaignInput("campaign_name", ""));
        dispatch(setCampaignInput("description", ""));
        setEditOpen(false);
    };

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const openAddModal = () => {
        setIsAddModalOpen(true);
    };
    const onAddModalClose = () => {
        setIsAddModalOpen(false);
        dispatch(setType("publique"));
        dispatch(setTitle(""));
        dispatch(setContent(""));
        dispatch(clearError());
    };
    
    useEffect (() => {
        dispatch(fetchNotes(id, userId));
    }, [dispatch, id, userId]);

    const notesList = useSelector(({ notes }) => notes.list);

    if (campaignLoader) {
        return <Loading />;
    }
    
    const is_author = (userId === currentCampaign.user_id);
    
    return (
        <MotionWrapper>
            <div className="campaign">
                <h1>{currentCampaign.campaign_name}</h1>
                <section className="pageOne">
                    <section className="sectionCarte">
                        <img src={carte} alt="" />
                    </section>
                    <section className="sectionResume">
                        <h2>Résumé de la campagne :</h2>
                        <p>{currentCampaign.description}</p>
                        {
                            is_author &&
                            <>
                                <button
                                    type="button"
                                    className="admin-button"
                                    onClick={handleOpenEdit}
                                >
                                    Modifier Campagne
                                </button>
                                <EditCampaignModal
                                    open={editOpen}
                                    onClose={handleCloseEdit}
                                    campaignId={+id}
                                />
                                <button
                                    type="button"
                                    className="admin-button delete-wiki"
                                    onClick={() => setDeleteOpen(true)}
                                >
                                    Supprimer Campagne
                                </button>
                                <ConfirmDelete
                                    open={deleteOpen}
                                    title={currentCampaign.campaign_name}
                                    onClose={() => setDeleteOpen(false)}
                                    onDelete={handleDelete}
                                />
                            </>
                        }
                    </section>
                </section>
                {loading && 
                <div>Chargement...</div>}
                {!loading &&
                <section className="pageTwo">
                    <img src={bg2} alt="" className="bg2"/>
                    <h2>Notes</h2>
                    <section className="allNotes">
                        <section className="notesPrivees">
                            <h3>Mes notes privées</h3>
                            {notesList.myPrivates.map((note) => <Note title={note.title} content={note.content} note_id={note.id} creator_id={note.user_id} campaign_id={id} user_id={userId} is_private={note.is_private} image_url={note.image_url} key={note.id}/>)}
                        </section>
                        <section className="notesPubliques">
                            <h3>Notes du groupe</h3>
                            {notesList.myPublics.map((note) => <Note title={note.title} content={note.content} note_id={note.id} creator_id={note.user_id} campaign_id={id} user_id={userId} is_private={note.is_private} image_url={note.image_url} key={note.id}/>)}
                            {notesList.publics.map((note) => <Note title={note.title} content={note.content} note_id={note.id} creator_id={note.user_id} campaign_id={id} user_id={userId} is_private={note.is_private} image_url={note.image_url} key={note.id}/>)}
                        </section>
                        <section className="imageDiscord">
                            <h3>Illustration</h3>
                            <img src={imgUrl} alt="" className="discordImg"/>
                        </section>
                    </section>
                    <button className="addNote" onClick={openAddModal}>Ajouter une nouvelle note</button>
                    <AddNoteModal open={isAddModalOpen} onClose={onAddModalClose} campaign_id={id}/>
                </section>
                }
            </div>
        </MotionWrapper>
    );
};

export default Campaign;