import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./noteModal.scss"

const MyNoteModal = ({ title, content, open, onClose, handleEdit, handleDelete, image_url }) => {

    if (!open) return null;
    
    return createPortal(
        <>
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="noteModalContainer">
                <h2>{title}</h2>
                <FontAwesomeIcon icon={faEdit} className="editIcon" onClick={handleEdit}/>
                <FontAwesomeIcon icon={faTrashAlt} className="deleteIcon" onClick={handleDelete}/>
                <div className="contentContainer">
                    <p>{content}</p>
                    {image_url !== "" && <img src={image_url} alt="" />}
                </div>
            </div>
        </>,
        document.querySelector("#modal")
    )
};

export default MyNoteModal;