// import {useState} from "react";
import { Link } from "react-router-dom";

import WikiSection from "./WikiSection";
import Menu from "../Menu";

import "./wikis.scss";

import arrow from "../../assets/images/flecheNavRouge.png";
import { useEffect } from "react";
// import radamirAPI from "../../apis/radamirAPI";

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

const Wikis = () => {
  // const [regions, setRegions] = useState([]);
  // const [others, setOthers] = useState([]);

  useEffect(() => {
    document.querySelector('.wikis').classList.remove('noDisplay');
    
    // const fetchData = async () => {
    //   const res = await radamirAPI.get("/wiki");
    //   console.log(res.data);
    // };
    // fetchData();
  },
  []);

  return (
        <div className="wikis noDisplay">
            <Menu />
            <h1 className="wikis__title">Index du Wiki</h1>
            <Link to="/" className="to-home">
                Accueil
                <img src={arrow} alt="Retour à l'accueil" />
            </Link>
            <WikiSection title="Régions" links={regions} />
            <WikiSection title="Informations Générales" links={others} />
        </div>
  );
};

export default Wikis;
