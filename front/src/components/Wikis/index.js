import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import WikiSection from "./WikiSection";
import MotionWrapper from "../MotionWrapper";
import AddWikiModal from "../AddWikiModal";

import "./wikis.scss";

import arrow from "../../assets/images/flecheNavRouge.webp";

const Wikis = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const { list } = useSelector(({ wikis }) => wikis);
  const regions = list.filter(({ type }) => type === "region");
  const others = list.filter(({ type }) => type === "other");

  useEffect(() => {
    setIsModalOpen(false);
  }, [location]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  return (
    <MotionWrapper>
        <div className="wikis">
            <h1 className="wikis__title">Index du Wiki</h1>
            <button onClick={toggleModal}>Ajouter un wiki</button>
            <AddWikiModal open={isModalOpen} onClose={onClose} />
            <Link to="/" className="to-home">
                Accueil
                <img src={arrow} alt="Retour à l'accueil" />
            </Link>
            <WikiSection header="Régions" links={regions} />
            <WikiSection header="Informations Générales" links={others} />
        </div>
    </MotionWrapper>
  );
};

export default Wikis;
