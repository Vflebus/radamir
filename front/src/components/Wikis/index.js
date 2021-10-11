import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import WikiSection from "./WikiSection";
import MotionWrapper from "../MotionWrapper";
import AddWikiModal from "../AddWikiModal";

import { setTitle, setType } from "../../actions/wikis";
import { clearError } from "../../actions/error";

import "./wikis.scss";

import arrow from "../../assets/images/flecheNavRouge.webp";

const Wikis = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const { list } = useSelector(({ wikis }) => wikis);
  const { is_admin } = useSelector(({ user: { loggedUser } }) => loggedUser);
  const regions = list.filter(({ type }) => type === "region");
  const general = list.filter(({ type }) => type === "general");

  useEffect(() => {
    setIsModalOpen(false);
  }, [location]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const onClose = () => {
    setIsModalOpen(false);
    dispatch(setType("region"));
    dispatch(setTitle(""));
    dispatch(clearError());
  };

  return (
    <MotionWrapper>
        <div className="wikis">
            <h1 className="wikis__title">Index du Wiki</h1>
            {is_admin && (
              <>
                <button onClick={openModal}>+</button>
                <AddWikiModal open={isModalOpen} onClose={onClose} />
              </>
            )}
            <Link to="/" className="to-home">
                Accueil
                <img src={arrow} alt="Retour à l'accueil" />
            </Link>
            <WikiSection header="Régions" links={regions} />
            <WikiSection header="Informations Générales" links={general} />
        </div>
    </MotionWrapper>
  );
};

export default Wikis;
