import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import FormField from "../FormField";

import { login } from "../../actions/user";

import "./connectionModal.scss";

const ConnectionModal = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();
  const { logged } = useSelector(({ user }) => user);
  const { message } = useSelector(({ error }) => error);

  useEffect(() => {
    if (logged) {
      onClose();

      if (pathname === "/signup") {
        history.push("/")
      }
    };
  }, [logged, onClose, history, pathname]);

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
        {message && (
          <div className="error">{message}</div>
        )}
        <form className="connection__form" onSubmit={handleSubmit}>
          <FormField inputId="email" label="Adresse e-mail" type="email" />
          <FormField inputId="password" label="Mot de passe" type="password" />
          <button type="submit" className="connect-user">Se connecter</button>
        </form>
          <span onClick={onClose} className="close-connect">
            <FontAwesomeIcon icon={faTimes} />
          </span>
      </div>
    </>,
    document.querySelector("#modal")
  );
};

export default ConnectionModal;