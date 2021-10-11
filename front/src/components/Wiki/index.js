import { useLocation, useParams } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import { useSelector } from "react-redux";

import WikiCategory from "./WikiCategory";
import MotionWrapper from "../MotionWrapper";

import "./wiki.scss";

const Wiki = () => {
  const { pathname } = useLocation();
  const { title } = useParams();

  const { list } = useSelector(({ wikis }) => wikis);
  const wiki = list.find(({ slug }) => slug === title);

  return (
      <MotionWrapper>
        {Object.keys(wiki.block[0]).length !== 0 && (
            <div className="links-container">
                <ul>
                    {wiki.block.map(({ id, title }) => {
                        return <li key={id}>
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
                    })}
                </ul>
            </div>       
        )}

        <div className="wiki">
            <h1 className="wiki__title">{wiki.title}</h1>
            {/* <Link to="/wiki" className="to-wiki">
                <img src={arrow} alt="Retour à l'index" />
                Retour à l'index
            </Link> */}
            {Object.keys(wiki.block[0]).length !== 0 && (
                <>
                    <select
                        name="links"
                        className="wiki__select"
                        onChange={(e) => window.location.assign(pathname + e.target.value)}
                    >
                        <option value="#">-- Sélectionnez une option --</option>
                        {wiki.block.map(({id, title}) => {
                            return <option key={id} value={`#wiki__category-${title.toLowerCase()}`}>{title}</option>;
                        })}
                    </select>
                    <div className="wiki__page">
                        <div className="category-container">
                            {wiki.block.map(({id, title, content}) => {
                                return <WikiCategory key={id} title={title} content={content} />;
                            })}
                        </div>
                    </div>
                </>
            )}
        </div>
      </MotionWrapper>
  );
};

export default Wiki;
