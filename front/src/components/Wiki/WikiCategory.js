const WikiCategory = ({ title, content }) => {
  return (
    <div
      className="wiki__category"
      id={`wiki__category-${title.toLowerCase()}`}
    >
      <h2 className="wiki__category-title">{title}</h2>
      <p className="wiki__category-content">{content}</p>
    </div>
  );
};

export default WikiCategory;
