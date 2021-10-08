import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import WikiSection from "./WikiSection";
import MotionWrapper from "../MotionWrapper";

import "./wikis.scss";

import arrow from "../../assets/images/flecheNavRouge.webp";

const Wikis = () => {
  const { list } = useSelector(({ wikis }) => wikis);
  const regions = list.filter(({ type }) => type === "region");
  const others = list.filter(({ type }) => type === "other");

  return (
    <MotionWrapper>
        <div className="wikis">
            <h1 className="wikis__title">Index du Wiki</h1>
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
