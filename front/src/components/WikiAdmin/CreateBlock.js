import PropTypes from "prop-types";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import {
  setBlockTitle,
  setBlockContent,
  createBlock
} from "../../actions/blocks";

const CreateBlock = ({ wikiId }) => {
  const dispatch = useDispatch();
  const { title } = useSelector(({ blocks }) => blocks);
  const { content } = useSelector(({ blocks }) => blocks);
  const { message } = useSelector(({ error }) => error);
  const [newBlockOpen, setNewBlockOpen] = useState(false);

  const handleCreateBlock = (e) => {
    e.preventDefault();
    dispatch(createBlock(wikiId));
    setNewBlockOpen(false);
  };

  const handleInputChange = (e) => {
    dispatch(setBlockTitle(e.target.value));
  };

  const handleTextareaChange = (e) => {
    dispatch(setBlockContent(e.target.value));
  };

  return (
    <div className="wiki__create-block">
      {message && (
        <div className="error">
          {message}
        </div>         
      )}
      {!newBlockOpen && (
        <button
          type="button"
          className="admin-button"
          onClick={() => setNewBlockOpen(true)}
        >
          Créer une section
        </button>
      )}
      {newBlockOpen && (
        <form onSubmit={handleCreateBlock} className="create-block">
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => setNewBlockOpen(false)}
            className="close-form"
          />
          <input
            type="text"
            placeholder="Titre"
            value={title}
            onChange={handleInputChange}
            maxLength={16}
          />
          <textarea
            placeholder="Contenu de la section"
            value={content}
            onChange={handleTextareaChange}
          />
          <button type="submit" className="admin-button">Ajouter section</button>
        </form>
      )}
    </div>
  );
};

CreateBlock.propTypes = {
  wikiId: PropTypes.number.isRequired
};

export default CreateBlock;