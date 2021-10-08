import PropTypes from "prop-types";

import wikiParchment from "../../assets/images/wikiParchment.webp"

const WikiBlock = ({ sectionId }) => {
  return (
    <div className="wiki__category" id={sectionId}>
      <button type="button">X</button>
      <div className="wiki__category-titleItem">
        <img src={wikiParchment} alt="" className="wikiParchment wiki__category-titleImage"/>
        <input type="text" className="wiki__category-title" placeholder="Titre section" />
      </div>
      <textarea className="wiki__category-content" placeholder="Contenu section" />
    </div>
  );
};

WikiBlock.propTypes = {
  sectionId: PropTypes.number.isRequired
};

export default WikiBlock;