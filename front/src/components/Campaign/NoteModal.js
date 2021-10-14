import { createPortal } from "react-dom";
import "./noteModal.scss"

const NoteModal = ({ title, content, open, onClose }) => {

    if (!open) return null;
    
    return createPortal(
        <>
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="noteModalContainer">
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </>,
        document.querySelector("#modal")
    )
};

export default NoteModal;