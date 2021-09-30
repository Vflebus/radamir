import { Link } from "react-router-dom";

import WikiSection from "./WikiSection";
import Menu from "../Menu";

import "./wikis.scss";

import arrow from "../../assets/images/flecheNavRouge.webp";
import { motion } from "framer-motion";

const regions = [
  { name: "Vanna", route: "vanna" },
  { name: "Feidlimid", route: "feidlimid" },
  { name: "Kervollen", route: "kervollen" },
  { name: "Karnaclok", route: "karnaclok" },
  { name: "Drok'nor", route: "droknor" },
];

const others = [
  { name: "Magie", route: "magie" },
  { name: "Dieux", route: "dieux" },
];

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
            <WikiSection title="Régions" links={regions} />
            <WikiSection title="Informations Générales" links={others} />
        </motion.div>
  );
};

export default Wikis;
