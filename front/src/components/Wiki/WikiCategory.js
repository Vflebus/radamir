const WikiCategory = ({ name, content }) => {
  return (
    <div className="wiki__category" id={`wiki__category-${name.toLowerCase()}`}>
      <h2 className="wiki__category-title">{name}</h2>
      <p className="wiki__category-content">{content}</p>
    </div>
  );
};

export default WikiCategory;
