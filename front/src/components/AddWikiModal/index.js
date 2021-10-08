import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const AddWikiModal = ({ open, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (!open) return null;

  return createPortal(
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="connection">
        <h2>Créer un Wiki</h2>
        <form className="connection__form" onSubmit={handleSubmit}>
          <div>
            <input type="text" placeholder="Titre" />
            <div>
              <input type="radio" id="title" name="type" value="region" />
              <label htmlFor="title">Région</label>
            </div>
            <div>
              <input type="radio" id="general" name="type" value="general" />
              <label htmlFor="general">Général</label>
            </div>
          </div>
          <button type="submit" className="connect-user">Confirmer</button>
        </form>
        <button className="close-connect" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </>,
    document.querySelector("#modal")
  );
};

export default AddWikiModal;