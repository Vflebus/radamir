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
];

const Wiki = () => {
  //TODO: use DB with params to fetch all categories
  const { title } = useParams();

  const region = regions.find((el) => title === el.region.toLowerCase());

  console.log(region);

  return (
    <div className="wiki">
      <h1 className="wiki__title">{title}</h1>
      <div className="wiki__page">
        <div className="category-container">
          <WikiCategory />
          <WikiCategory />
          <WikiCategory />
        </div>
        <div className="links-container">
          <a href="#test">Test</a>
        </div>
      </div>
    </div>
  );
};

export default Wiki;
