import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import {
  setBlockTitle,
  setBlockContent,
  updateBlock
} from "../../actions/blocks";

import "./editBlockModal.scss";

const EditBlockModal = ({ open, onClose, blockId }) => {
  const dispatch = useDispatch();
  const { message } = useSelector(({ error }) => error);
  const { title } = useSelector(({ blocks }) => blocks);
  const { content } = useSelector(({ blocks }) => blocks);

  const handleInputChange = (e) => {
    dispatch(setBlockTitle(e.target.value));
  };

  const handleTextareaChange = (e) => {
    dispatch(setBlockContent(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBlock(blockId));
    onClose();
  };

  if (!open) return null;
  
  return createPortal(
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="connection" id="edit-block">
        <h2>Modifier Section</h2>
        {message && (
          <div className="error">{message}</div>
        )}
        <form onSubmit={handleSubmit} className="connection__form">
          <input
            type="text"
            placeholder="Titre"
            value={title}
            onChange={handleInputChange}
            maxLength={16}
          />
          <textarea
            className="edit-content"
            placeholder="Contenu de la section"
            value={content}
            onChange={handleTextareaChange}
          />
          <button type="submit" className="connect-user">Modifier section</button>
        </form>
        <FontAwesomeIcon icon={faTimes} className="close-connect" onClick={onClose} />
      </div>
    </>,
    document.querySelector("#modal")
  )
};

EditBlockModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  blockId: PropTypes.number.isRequired
};

export default EditBlockModal;