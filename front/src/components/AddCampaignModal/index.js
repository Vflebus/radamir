import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { setCampaignInput, createCampaign } from "../../actions/campaigns";

const AddCampaignModal = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const { id } = useSelector(({ user: { loggedUser } }) => loggedUser)
  const { message } = useSelector(({ error }) => error);
  const { campaign_name } = useSelector(({ campaigns }) => campaigns);
  const { description } = useSelector(({ campaigns }) => campaigns);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCampaign(id));
    onClose();
  };

  const handleNameChange = (e) => {
    dispatch(setCampaignInput("campaign_name", e.target.value));
  };

  const handleDescriptionChange = (e) => {
    dispatch(setCampaignInput("description", e.target.value));
  };

  if (!open) return null;

  return createPortal(
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="connection">
        <h2>Créer une campagne</h2>
        {message && (
          <div className="error">{message}</div>
        )}
        <form className="connection__form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Titre de la campagne"
            value={campaign_name}
            onChange={handleNameChange}
          />
          <textarea
            placeholder="Description de la campagne"
            value={description}
            onChange={handleDescriptionChange}
          />
          <button type="submit" className="connect-user">Créer</button>
        </form>
        <FontAwesomeIcon icon={faTimes} className="close-connect" onClick={onClose} />
      </div>
    </>,
    document.querySelector("#modal")
  )
};

AddCampaignModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default AddCampaignModal;