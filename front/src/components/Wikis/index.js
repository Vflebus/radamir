import { Link } from "react-router-dom";

import WikiSection from "./WikiSection";
import Menu from "../Menu";

import "./wikis.scss";

import arrow from "../../assets/images/flecheNavRouge.png";
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
    x: 0,
    scale: 1
  },
  out: {
    x: "-100vw",
    scale: 0.8
  }
};

const pageTransitions = {
  transition: "linear",
  duration: 1
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
