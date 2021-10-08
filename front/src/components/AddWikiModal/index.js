import { useSelector, useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { setTitle, setType, createWiki } from "../../actions/wikis";

const AddWikiModal = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const { title } = useSelector(({ wikis }) => wikis);
  const { type } = useSelector(({ wikis }) => wikis);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createWiki());
    onClose();
  };

  const handleInputChange = (e) => {
    dispatch(setTitle(e.target.value));
  };

  const handleRadioChange = (e) => {
    dispatch(setType(e.target.value));
  };

  if (!open) return null;

  return createPortal(
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="connection">
        <h2>Créer un Wiki</h2>
        <form className="connection__form" onSubmit={handleSubmit}>
          <div>
            <input type="text" placeholder="Titre" value={title} onChange={handleInputChange} />
            <div>
              <input
                type="radio"
                id="title"
                name="type"
                value="region"
                checked={type === "region"}
                onChange={handleRadioChange}
              />
              <label htmlFor="title">Région</label>
            </div>
            <div>
              <input
                type="radio"
                id="general"
                name="type"
                value="general"
                checked={type === "general"}
                onChange={handleRadioChange}
              />
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