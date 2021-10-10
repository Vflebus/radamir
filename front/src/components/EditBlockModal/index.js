import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { setBlockTitle, setBlockContent } from "../../actions/blocks";

const EditBlockModal = ({ open, onClose }) => {
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

  if (!open) return null;
  
  return createPortal(
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="connection">
        <h2>Modifier Section</h2>
        {message && (
          <div className="error">{message}</div>
        )}
        <form>
          <input
            type="text"
            placeholder="Titre"
            value={title}
            onChange={handleInputChange}
          />
          <textarea
            placeholder="Contenu de la section"
            value={content}
            onChange={handleTextareaChange}
          />
          <button type="submit">Modifier section</button>
        </form>
        <FontAwesomeIcon icon={faTimes} className="close-connect" onClick={onClose} />
      </div>
    </>,
    document.querySelector("#modal")
  )
};

EditBlockModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default EditBlockModal;