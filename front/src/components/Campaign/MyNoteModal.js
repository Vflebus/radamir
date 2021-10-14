import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./noteModal.scss"

const MyNoteModal = ({ title, content, open, onClose, handleEdit, handleDelete }) => {

    if (!open) return null;
    
    return createPortal(
        <>
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="noteModalContainer">
                <h2>{title}</h2>
                <FontAwesomeIcon icon={faEdit} className="editIcon" onClick={handleEdit}/>
                <FontAwesomeIcon icon={faTrashAlt} className="deleteIcon" onClick={handleDelete}/>
                <p>{content}</p>
            </div>
        </>,
        document.querySelector("#modal")
    )
};

export default MyNoteModal;