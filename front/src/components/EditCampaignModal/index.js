import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { setCampaignInput, updateCampaign } from "../../actions/campaigns";

const EditCampaignModal = ({ open, onClose, campaignId }) => {
  const dispatch = useDispatch();
  const { message } = useSelector(({ error }) => error);
  const { campaign_name } = useSelector(({ campaigns }) => campaigns);
  const { description } = useSelector(({ campaigns }) => campaigns);
  const userId = useSelector(({ user: { loggedUser } }) => loggedUser.id);

  const handleInputChange = (e) => {
    dispatch(setCampaignInput("campaign_name", e.target.value));
  };

  const handleTextareaChange = (e) => {
    dispatch(setCampaignInput("description", e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCampaign(userId, campaignId));
    onClose();
  };

  if (!open) return null;
  
  return createPortal(
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="connection" id="edit-block">
        <h2>Modifier Campagne</h2>
        {message && (
          <div className="error">{message}</div>
        )}
        <form onSubmit={handleSubmit} className="connection__form">
          <input
            type="text"
            placeholder="Titre de la campagne"
            value={campaign_name}
            onChange={handleInputChange}
            maxLength={16}
          />
          <textarea
            className="edit-content"
            placeholder="Description de la campagne"
            value={description}
            onChange={handleTextareaChange}
          />
          <button type="submit" className="connect-user">Modifier campagne</button>
        </form>
        <FontAwesomeIcon icon={faTimes} className="close-connect" onClick={onClose} />
      </div>
    </>,
    document.querySelector("#modal")
  )
};

EditCampaignModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  campaignId: PropTypes.number.isRequired
};

export default EditCampaignModal;