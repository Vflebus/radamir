import { useState } from "react";
import { useLocation, useParams, useHistory } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import WikiBlock from "./WikiBlock";
import MotionWrapper from "../MotionWrapper";
import CreateBlock from "./CreateBlock";
import EditWikiModal from "../EditWikiModal";

import { setTitle, deleteWiki } from "../../actions/wikis";
import { clearError } from "../../actions/error";

import "./wikiAdmin.scss";

const WikiAdmin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();
  const { title } = useParams();
  const [editTitle, setEditOpen] = useState(false);

  const { list } = useSelector(({ wikis }) => wikis);
  const wiki = list.find(({ slug }) => slug === title);

  const handleOpen = () => {
    dispatch(setTitle(wiki.title));
    setEditOpen(true);
  };

  const handleClose = () => {
    setEditOpen(false);
    dispatch(setTitle(""));
    dispatch(clearError());
  };

  const handleDelete = () => {
    dispatch(deleteWiki(wiki.id));
    history.push("/wiki");
  };

  if (!wiki) return null

  return (
    <MotionWrapper>
      {wiki.block && (
        <div className="links-container">
          <ul>
            {wiki.block.map(({ id, title }) => {
              return (
                <li key={id}>
                  <ScrollLink
                    to={`wiki__category-${title.toLowerCase()}`}
                    className="categorySelector"
                    offset={-300}
                    spy={true}
                    smooth={true}
                  >
                    {title}
                  </ScrollLink>
                </li>
              );
            })}
          </ul>
        </div>       
      )}

      <div className="wiki">
        <h1 className="wiki__title">
          {wiki.title}
          <FontAwesomeIcon icon={faEdit} onClick={handleOpen} className="controls-button" />
          <EditWikiModal open={editTitle} onClose={handleClose} wikiId={wiki.id} />
        </h1>
        {wiki.block && (
          <>
            <select
              name="links"
              className="wiki__select"
              onChange={(e) => window.location.assign(pathname + e.target.value)}
            >
              <option value="#">-- Sélectionnez une option --</option>
              {wiki.block.map(({id, title}) => {
                  return (
                  <option key={id} value={`#wiki__category-${title.toLowerCase()}`}>
                    {title}
                  </option>
                  );
              })}
            </select>
            <div className="wiki__page">
              <div className="category-container">
                {wiki.block.map(({id, title, content}) => {
                    return <WikiBlock key={id} title={title} content={content} blockId={id} />;
                })}
              </div>
            </div>
          </>
        )}
        <CreateBlock wikiId={wiki.id} />
        <button
          type="button"
          onClick={handleDelete}
          className="admin-button delete-wiki"
        >
          Supprimer Wiki
        </button>
      </div>
    </MotionWrapper>
  );
};

export default WikiAdmin;
