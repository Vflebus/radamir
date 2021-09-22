import { useParams } from "react-router-dom";

import WikiCategory from "./WikiCategory";

import "./wiki.scss";

import data from "./data.json";

const Wiki = () => {
  //TODO: use DB with params to fetch all categories
  const { title } = useParams();

  const wiki = data.find((el) => title === el.route);

  return (
    <div className="wiki">
      <h1 className="wiki__title">{wiki.title}</h1>
      <div className="wiki__page">
        <div className="category-container">
          {wiki.categories.map((category) => (
            <WikiCategory key={category.content} {...category} />
          ))}
        </div>
        <div className="links-container">
          {wiki.categories.map(({ title }) => (
            <a href={`#wiki__category-${title.toLowerCase()}`} key={title}>
              {title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wiki;
