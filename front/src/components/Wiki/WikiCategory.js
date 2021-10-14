import PropTypes from "prop-types";

import wikiParchment from "../../assets/images/wikiParchment.webp"

const WikiCategory = ({ title, content }) => {
  return (
    <div className="wiki__category" id={`wiki__category-${title.toLowerCase()}`}>
      <div className="wiki__category-titleItem">
        <img src={wikiParchment} alt="" className="wikiParchment wiki__category-titleImage"/>
        <h2 className="wiki__category-title">{title}</h2>
      </div>
      <p className="wiki__category-content">{content}</p>
    </div>
  );
};

WikiCategory.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default WikiCategory;
