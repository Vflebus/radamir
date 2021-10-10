import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setBlockTitle, setBlockContent } from "../../actions/blocks";

const CreateBlock = () => {
  const dispatch = useDispatch();
  const { title } = useSelector(({ blocks }) => blocks);
  const { content } = useSelector(({ blocks }) => blocks);
  const [newBlockOpen, setNewBlockOpen] = useState(false);

  const handleCreateBlock = (e) => {
    e.preventDefault();
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
      {!newBlockOpen && (
        <button type="button" onClick={() => setNewBlockOpen(true)}>
          Créer une section
        </button>
      )}
      {newBlockOpen && (
        <form onSubmit={handleCreateBlock}>
          <input
            type="text"
            placeholder="Titre"
            value={title}
            onChange={handleInputChange}
          />
          <textarea
            placeholder="Contenu de la section"
            value={content}
            onChange={handleTextareaChange}
          />
          <button type="submit">Ajouter section</button>
        </form>
      )}
    </div>
  );
};

export default CreateBlock;