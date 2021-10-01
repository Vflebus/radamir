import { useLocation, useParams } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import { motion } from "framer-motion";

import WikiCategory from "./WikiCategory";
import Menu from "../Menu";

import "./wiki.scss";

import data from "../../data-example.json";

const pageVariants = {
    in: {
      opacity: 1
    },
    out: {
      opacity: 0
    }
};

const pageTransitions = {
    transition: "linear",
    duration: 1
};
  
  
const Wiki = () => {
  const { pathname } = useLocation();
  const { title } = useParams();

  const { id } = data.find(({ id }) => id.slug === title);

  return (
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransitions}
      >
        <div className="links-container">
            <ul>
                {id.blocks.map(({ id, title }) => {
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

        <div>
            <Menu />
            <div className="wiki">
                <h1 className="wiki__title">{id.title}</h1>
                {/* <Link to="/wiki" className="to-wiki">
                    <img src={arrow} alt="Retour à l'index" />
                    Retour à l'index
                </Link> */}
                <select
                    name="links"
                    className="wiki__select"
                    onChange={(e) => window.location.assign(pathname + e.target.value)}
                >
                    <option value="#">-- Sélectionnez une option --</option>
                    {id.blocks.map(({id, title}) => {
                        return <option key={id} value={`#wiki__category-${title.toLowerCase()}`}>{title}</option>;
                    })}
                </select>
                <div className="wiki__page">
                    <div className="category-container">
                        {id.blocks.map(({id, title, content}) => {
                            return <WikiCategory key={id} title={title} content={content} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
      </motion.div>
  );
};

export default Wiki;
