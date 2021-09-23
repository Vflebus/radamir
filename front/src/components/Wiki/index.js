import { Link, useLocation } from "react-router-dom";

import WikiCategory from "./WikiCategory";

import arrow from "../../assets/images/flecheNavRouge.png";
import "./wiki.scss";

const Wiki = () => {
  const { pathname } = useLocation();

  return (
    <div className="wiki">
      <h1 className="wiki__title">Titre Section</h1>
      <Link to="/wiki" className="to-wiki">
        <img src={arrow} alt="Retour à l'index" />
        Retour à l'index
      </Link>
      <select
        name="links"
        className="wiki__select"
        onChange={(e) => window.location.assign(pathname + e.target.value)}
      >
        <option value="#">-- Sélectionnez une option --</option>
        <option value="#wiki__category-histoire">Histoire</option>
        <option value="#wiki__category-géographie">Géographie</option>
        <option value="#wiki__category-architecture">Architecture</option>
        <option value="#wiki__category-langue">Langue</option>
      </select>
      <div className="wiki__page">
        <div className="category-container">
          <WikiCategory title="Histoire" content="blablabla" />
          <WikiCategory title="Géographie" content="blablabla" />
          <WikiCategory title="Architecture" content="blablabla" />
          <WikiCategory title="Langue" content="blablabla" />
        </div>
        <div className="links-container">
          <a href="#wiki__category-histoire">Histoire</a>
          <a href="#wiki__category-géographie">Géographie</a>
          <a href="#wiki__category-architecture">Architecture</a>
          <a href="#wiki__category-langue">Langue</a>
        </div>
      </div>
    </div>
  );
};

export default Wiki;
