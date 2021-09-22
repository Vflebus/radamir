import { useParams } from "react-router-dom";

import WikiCategory from "./WikiCategory";

const regions = [
  {
    region: "Vanna",
    history: "blablabla",
    geography: "blablabla",
    architecture: "blablabla",
  },
  {
    region: "Feidlimid",
    history: "blablabla",
    geography: "blablabla",
    architecture: "blablabla",
  },
  {
    region: "Kervollen",
    history: "blablabla",
    geography: "blablabla",
    architecture: "blablabla",
  },
  {
    region: "Drok'nor",
    history: "blablabla",
    geography: "blablabla",
    architecture: "blablabla",
  },
  {
    region: "Karnaclok",
    history: "blablabla",
    geography: "blablabla",
    architecture: "blablabla",
  },
];

const Wiki = () => {
  //TODO: use DB with params to fetch all categories
  const { title } = useParams();

  const region = regions.find(
    (el) => title === el.region.replace(/\W/g, "").toLowerCase()
  );

  const categories = Object.entries(region)
    .slice(1)
    .map(([key, value]) => {
      return { name: key, content: value };
    });

  return (
    <div className="wiki">
      <h1 className="wiki__title">{region.region}</h1>
      <div className="wiki__page">
        <div className="category-container">
          {categories.map((category) => (
            <WikiCategory key={category.content} {...category} />
          ))}
        </div>
        <div className="links-container">
          {categories.map(({ name }) => (
            <a href={`#wiki__category-${name.toLowerCase()}`}>{name}</a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wiki;
