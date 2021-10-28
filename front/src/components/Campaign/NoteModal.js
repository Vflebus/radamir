import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./noteModal.scss"

const NoteModal = ({ title, content, open, onClose, image_url }) => {

    if (!open) return null;
    
    return createPortal(
        <>
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="noteModalContainer">
                <h2>{title}</h2>
                <FontAwesomeIcon icon={faTimes} className="closeIcon" onClick={onClose} />
                <div className="contentContainer">
                    {content !== "" && <p>{content}</p>}
                    {image_url !== "" && <img src={image_url} alt="" />}
                </div>
            </div>
        </>,
        document.querySelector("#modal")
    )
};

export default NoteModal;