import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { createNote, setTitle, setType, setContent, setImageUrl } from "../../actions/notes";

import "./addNoteModal.scss"

const AddNoteModal = ({ open, onClose, campaign_id }) => {
  const dispatch = useDispatch();
  const { title } = useSelector(({ notes }) => notes);
  const { type } = useSelector(({ notes }) => notes);
  const { content } = useSelector(({ notes }) => notes);
  const { image_url } = useSelector(({ notes }) => notes);
  const { message } = useSelector(({ error }) => error);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNote(campaign_id));
    onClose();
    console.log('submit');
  };

  const handleInputChange = (e) => {
    dispatch(setTitle(e.target.value));
  };

  const handleImageChange = (e) => {
    dispatch(setImageUrl(e.target.value));
  };

  const handleRadioChange = (e) => {
    dispatch(setType(e.target.value));
  };

  const handleTextareaChange = (e) => {
      dispatch(setContent(e.target.value));
  }

  if (!open) return null;

  return createPortal(
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="connection" id="noteModal">
        <h2>Créer une note</h2>
        {message && (
          <div className="error">{message}</div>
        )}
        <form className="connection__form" onSubmit={handleSubmit}>
          <div className="create-wiki">
            <input
              type="text"
              maxLength="45"
              placeholder="Titre"
              className="input-title"
              value={title}
              onChange={handleInputChange}
            />
            <input
              type="text"
              maxLength="255"
              placeholder="url de l'image à associer à la note (optionnel)"
              className="input-title"
              value={image_url}
              onChange={handleImageChange}
            />
            <textarea
                className="edit-content"
                placeholder="Contenu de la note"
                value={content}
                onChange={handleTextareaChange}
            />
            <div className="radio-button-container">
                <div className="radio-button">
                  <input
                    type="radio"
                    id="publique"
                    name="type"
                    value="publique"
                    checked={type === "publique"}
                    onChange={handleRadioChange}
                  />
                  <label htmlFor="title">Publique</label>
                </div>
                <div className="radio-button">
                  <input
                    type="radio"
                    id="privee"
                    name="type"
                    value="privee"
                    checked={type === "privee"}
                    onChange={handleRadioChange}
                  />
                  <label htmlFor="general">Privée</label>
                </div>
            </div>
          </div>
          <button type="submit" className="connect-user">Confirmer</button>
        </form>
        <FontAwesomeIcon icon={faTimes} className="close-connect" onClick={onClose} />
      </div>
    </>,
    document.querySelector("#modal")
  );
};

AddNoteModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default AddNoteModal;