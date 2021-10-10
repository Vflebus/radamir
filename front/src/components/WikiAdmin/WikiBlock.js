import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { deleteBlock } from "../../actions/blocks";

import wikiParchment from "../../assets/images/wikiParchment.webp"

const WikiCategory = ({ title, content, blockId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteBlock(blockId));
  };

  return (
    <div className="wiki__category" id={`wiki__category-${title.toLowerCase()}`}>
      <div className="wiki__category-titleItem">
        <img src={wikiParchment} alt="" className="wikiParchment wiki__category-titleImage"/>
        <h2 className="wiki__category-title">{title}</h2>
      </div>
      <p className="wiki__category-content">{content}</p>
      <button type="button" onClick={handleDelete}>Supprimer la section</button>
    </div>
  );
};

WikiCategory.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  blockId: PropTypes.number.isRequired
};

export default WikiCategory;
