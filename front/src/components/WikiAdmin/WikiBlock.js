import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import {
  deleteBlock,
  setBlockTitle,
  setBlockContent
} from "../../actions/blocks";

import wikiParchment from "../../assets/images/wikiParchment.webp"

const WikiCategory = ({ title, content, blockId }) => {
  const dispatch = useDispatch();
  const titleEdit = useSelector(({ blocks }) => blocks.title);
  const contentEdit = useSelector(({ blocks }) => blocks.content);
  const [editOpen, setEditOpen] = useState(false);

  const handleOpenEdit = () => {
    dispatch(setBlockTitle(title));
    dispatch(setBlockContent(content));
    setEditOpen(true);
  };

  const handleCloseEdit = () => {
    dispatch(setBlockTitle(""));
    dispatch(setBlockContent(""));
    setEditOpen(false);
  };

  const handleDelete = () => {
    dispatch(deleteBlock(blockId));
  };

  const handleInputChange = (e) => {
    dispatch(setBlockTitle(e.target.value));
  };

  const handleTextareaChange = (e) => {
    dispatch(setBlockContent(e.target.value));
  };

  return (
    <div className="wiki__category" id={`wiki__category-${title.toLowerCase()}`}>
      <div className="wiki__category-titleItem">
        <img src={wikiParchment} alt="" className="wikiParchment wiki__category-titleImage"/>
        <h2 className="wiki__category-title">{title}</h2>
      </div>
      <p className="wiki__category-content">{content}</p>
      {editOpen && (
        <form>
          <input
            type="text"
            placeholder="Titre"
            value={titleEdit}
            onChange={handleInputChange}
          />
          <textarea
            placeholder="Contenu de la section"
            value={contentEdit}
            onChange={handleTextareaChange}
          />
          <button type="submit">Ajouter section</button>
        </form>
      )}
      <FontAwesomeIcon
        icon={faEdit}
        onClick={editOpen ? handleCloseEdit : handleOpenEdit}
      />
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
