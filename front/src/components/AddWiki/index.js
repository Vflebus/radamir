import { useState, useEffect } from "react";

import MotionWrapper from "../MotionWrapper";
import WikiBlock from "./WikiBlock";

import "./index.scss";

const AddWiki = () => {
  const [id, setId] = useState(1);
  const [children, setChildren] = useState([<WikiBlock sectionId={id} key={id} />]);

  useEffect(() => {
    setId(id => id + 1);
  }, [children]);

  const onAddSection = () => {
    setChildren([...children, <WikiBlock sectionId={id} key={id} />]);
  };

  // const onRemoveSection = () => {

  // };

  return (
    <MotionWrapper>
      <form>
        <div className="wiki">
          <input type="text" placeholder="Titre du wiki" className="wiki__title" />
          <div className="wiki__page">
            <div className="category-container">
              {children}
            </div>
          </div>
          <button type="button" onClick={onAddSection}>Ajouter Section</button>
          <button type="submit">Créer Wiki</button>
        </div>
      </form>
    </MotionWrapper>
  );
};

export default AddWiki;