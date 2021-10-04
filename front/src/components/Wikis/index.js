import { Link } from "react-router-dom";

import WikiSection from "./WikiSection";
import Menu from "../Menu";

import "./wikis.scss";

import arrow from "../../assets/images/flecheNavRouge.webp";
import { motion } from "framer-motion";

import data from "../../data-example.json";

const pageVariants = {
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

const pageTransitions = {
  transition: "linear",
  duration: 0.7
};

const Wikis = () => {
  const regions = data.filter((el) => el.type === "region");
  const others = data.filter((el) => el.type === "other");

  return (
        <motion.div
          className="wikis"
          initial="out"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransitions}
        >
            <Menu />
            <h1 className="wikis__title">Index du Wiki</h1>
            <Link to="/" className="to-home">
                Accueil
                <img src={arrow} alt="Retour à l'accueil" />
            </Link>
            <WikiSection header="Régions" links={regions} />
            <WikiSection header="Informations Générales" links={others} />
        </motion.div>
  );
};

export default Wikis;
