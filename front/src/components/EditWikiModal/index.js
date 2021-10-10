import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { setTitle, updateWiki } from "../../actions/wikis";

const EditWikiModal = ({ open, onClose, wikiId }) => {
  const dispatch = useDispatch();
  const { message } = useSelector(({ error }) => error);
  const { title } = useSelector(({ wikis }) => wikis);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateWiki(wikiId));
  };

  const handleInputChange = (e) => {
    dispatch(setTitle(e.target.value));
  };

  if (!open) return null;

  return createPortal(
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="connection">
        <h2>Modifier Titre</h2>
        {message && (
          <div className="error">{message}</div>
        )}
        <form className="connection__form" onSubmit={handleSubmit}>
          <input type="text" value={title} onChange={handleInputChange} />
          <button type="submit" className="connect-user">Modifier</button>
        </form>
        <FontAwesomeIcon icon={faTimes} className="close-connect" onClick={onClose} />
      </div>
    </>,
    document.querySelector("#modal")
  )
};

export default EditWikiModal;