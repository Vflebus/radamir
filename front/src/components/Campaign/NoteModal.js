import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./noteModal.scss"
import { useRef } from "react";
import { useSelector } from "react-redux";

const NoteModal = ({ title, content, open, onClose, image_url, creator_id, user_id, handleEdit, handleDelete }) => {

    const isAdmin = useSelector(({ user: { loggedUser } }) => loggedUser.is_admin);
    const isMine = creator_id === user_id || isAdmin ? true : false;

    const modalOverlay = useRef();
    const modalContainer = useRef();
    const toggleBigPicture = (event) => {
        event.target.classList.toggle("bigPicture");
        modalOverlay.current.classList.toggle("bgcDark");
        modalContainer.current.classList.toggle("noVisibility");
    }

    if (!open) return null;
    
    return createPortal(
        <>
            <div className="modal-overlay" onClick={onClose} ref={modalOverlay}></div>
            <div className="noteModalContainer" ref={modalContainer}>
                <h2>{title}</h2>
                <FontAwesomeIcon icon={faTimes} className="closeIcon" onClick={onClose} />
                {
                    isMine &&
                    <>
                        <FontAwesomeIcon icon={faEdit} className="editIcon" onClick={handleEdit}/>
                        <FontAwesomeIcon icon={faTrashAlt} className="deleteIcon" onClick={handleDelete}/>
                    </>
                }
                <div className="contentContainer">
                    {
                        content &&
                        <p>{content}</p>
                    }
                    {
                        image_url &&
                        !content  &&
                        <img src={image_url} alt="visuel associé à la note" className="imageNoText" onClick={toggleBigPicture} />
                    }
                    {
                        image_url &&
                        content &&
                        <img src={image_url} alt="visuel associé à la note" onClick={toggleBigPicture} />
                    }
                </div>
            </div>
        </>,
        document.querySelector("#modal")
    )
};

export default NoteModal;