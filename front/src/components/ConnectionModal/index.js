import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";

import FormField from "../FormField";

import { login } from "../../actions/user";

import "./connectionModal.scss";

const ConnectionModal = ({ open, onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login());
  };

  if (!open) return null;

  return createPortal(
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="connection">
        <h2>Connexion</h2>
        <form className="connection__form" onSubmit={handleSubmit}>
          <FormField inputId="email" label="Adresse e-mail" type="email" />
          <FormField inputId="password" label="Mot de passe" type="password" />
          <button type="submit">Se connecter</button>
        </form>
          <button onClick={onClose}>Fermer modale</button>
      </div>
    </>,
    document.querySelector("#modal")
  );
};

export default ConnectionModal;