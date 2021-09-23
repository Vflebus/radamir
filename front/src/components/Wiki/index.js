import WikiCategory from "./WikiCategory";

import "./wiki.scss";

const Wiki = () => {
  return (
    <div className="wiki">
      <h1 className="wiki__title">Titre Section</h1>
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
