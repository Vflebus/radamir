import { useLocation, useParams, useHistory } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import { useSelector, useDispatch } from "react-redux";

import WikiBlock from "./WikiBlock";
import MotionWrapper from "../MotionWrapper";
import CreateBlock from "./CreateBlock";

import { setTitle, updateWiki, deleteWiki } from "../../actions/wikis";

const WikiAdmin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();
  const { title } = useParams();

  const { list } = useSelector(({ wikis }) => wikis);
  const wiki = list.find(({ slug }) => slug === title);

  const titleInput = useSelector(({ wikis }) => wikis.title);

  const handleInputChange = (e) => {
    dispatch(setTitle(e.target.value));
  };

  const handleTitleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateWiki(wiki.id));
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
        <form onSubmit={handleTitleUpdate}>
          <input
            type="text"
            placeholder={wiki.title}
            value={titleInput}
            onChange={handleInputChange}
          />
          <button type="submit">Modifier</button>
        </form>
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
        <button type="button" onClick={handleDelete}>Supprimer Wiki</button>
      </div>
    </MotionWrapper>
  );
};

export default WikiAdmin;
