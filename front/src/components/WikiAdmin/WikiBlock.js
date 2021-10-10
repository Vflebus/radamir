import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import EditBlockModal from "../EditBlockModal";

import {
  deleteBlock,
  setBlockTitle,
  setBlockContent
} from "../../actions/blocks";
import { clearError } from "../../actions/error";

import wikiParchment from "../../assets/images/wikiParchment.webp"

const WikiBlock = ({ title, content, blockId }) => {
  const dispatch = useDispatch();
  const [editOpen, setEditOpen] = useState(false);

  const handleOpenEdit = () => {
    dispatch(setBlockTitle(title));
    dispatch(setBlockContent(content));
    setEditOpen(true);
  };

  const handleCloseEdit = () => {
    dispatch(clearError());
    dispatch(setBlockTitle(""));
    dispatch(setBlockContent(""));
    setEditOpen(false);
  };

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
      <FontAwesomeIcon icon={faEdit} onClick={handleOpenEdit} />
      <EditBlockModal open={editOpen} onClose={handleCloseEdit} blockId={blockId} />
      <button type="button" onClick={handleDelete}>Supprimer la section</button>
    </div>
  );
};

WikiBlock.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  blockId: PropTypes.number.isRequired
};

export default WikiBlock;
