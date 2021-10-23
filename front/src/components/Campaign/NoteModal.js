import { createPortal } from "react-dom";
import "./noteModal.scss"

const NoteModal = ({ title, content, open, onClose, image_url }) => {

    if (!open) return null;
    
    return createPortal(
        <>
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="noteModalContainer">
                <h2>{title}</h2>
                <div className="contentContainer">
                    <p>{content}</p>
                    <img src={image_url} alt="" />
                </div>
            </div>
        </>,
        document.querySelector("#modal")
    )
};

export default NoteModal;