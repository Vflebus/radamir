import { useState } from "react";
import cadre from "../../assets/images/parchment.png"
import NoteModal from "./NoteModal";
import MyNoteModal from "./MyNoteModal";
import EditNoteModal from "./EditNoteModal";
import { useDispatch } from "react-redux";
import { deleteNote, setContent, setTitle, setType } from "../../actions/notes";

const Note = ({ title, content, note_id, creator_id, campaign_id, user_id, is_private, image_url }) => {

    const isMine = creator_id === user_id ? true : false;
    const [isOpen, setIsOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const dispatch = useDispatch();

    const openModal = () => {
        setIsOpen(true);
    }

    const onClose = () => {
        setIsOpen(false);
        setIsEditOpen(false);
    }

    const handleEdit = () => {
        setIsOpen(false);
        setIsEditOpen(true);
        console.log(`note: ${note_id} campaign: ${campaign_id}`);
        dispatch(setTitle(title));
        const previousType = is_private ? "privee" : "publique";
        dispatch(setType(previousType));
        dispatch(setContent(content));
    }
    const handleDelete = () => {
        setIsOpen(false);
        dispatch(deleteNote(note_id, campaign_id, user_id));
    }

    return (
        <>
            <button className="noteContainer" onClick={openModal}>
                <img src={cadre} alt=""/>
                <h4>{title}</h4>
            </button>
            {isMine ? <MyNoteModal open={isOpen} onClose={onClose} title={title} content={content} image_url={image_url} handleEdit={handleEdit} handleDelete={handleDelete}/> : <NoteModal open={isOpen} onClose={onClose} title={title} content={content} image_url={image_url}/>}
            <EditNoteModal open={isEditOpen} onClose={onClose} note_id={note_id} campaign_id={campaign_id} />
        </>
    )
};

export default Note;