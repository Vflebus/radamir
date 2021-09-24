const Term = ({ title, content }) => {
  return (
    <div className="term">
      <h2 className="term__title">{title}</h2>
      <p className="term__content">{content}</p>
    </div>
  );
};

export default Term;
