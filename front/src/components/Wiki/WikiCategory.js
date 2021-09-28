import wikiParchment from "../../assets/images/wikiParchment.png"

const WikiCategory = ({ title, content }) => {
  return (
    <div className="wiki__category" id={`wiki__category-${title.toLowerCase()}`}>
      <div className="wiki__category-titleItem">
        <img src={wikiParchment} alt="" className="wikiParchment wiki__category-titleImage"/>
        <h2 className="wiki__category-title">{title}</h2>
      </div>
      <p className="wiki__category-content">{content}</p>
    </div>
  );
};

export default WikiCategory;
