import { createPortal } from "react-dom";

import "./connectionModal.scss";

const ConnectionModal = ({ open, onClose }) => {
  if (!open) return null;

  return createPortal(
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        Modal
        <button onClick={onClose}>Fermer</button>
      </div>
    </>,
    document.querySelector("#modal")
  );
};

export default ConnectionModal;