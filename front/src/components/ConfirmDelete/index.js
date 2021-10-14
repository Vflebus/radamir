import PropTypes from "prop-types";
import { createPortal } from "react-dom";

const ConfirmDelete = ({ open, title, onClose, onDelete }) => {
  if (!open) return null;

  return createPortal(
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="connection">
        <h2>Supprimer {title} ?</h2>
        <button
          type="submit"
          className="admin-button delete-wiki"
          onClick={onDelete}
        >
          Supprimer
        </button>
        <button
          type="button"
          className="admin-button"
          onClick={onClose}
        >
          Annuler
        </button>
      </div>
    </>,
    document.querySelector("#modal")
  );
};

ConfirmDelete.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ConfirmDelete;