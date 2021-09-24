import Term from "./Term";

import terms from "./terms.json";

const Terms = () => {
  return (
    <div className="terms">
      <h1 className="terms__title">mentions légales</h1>
      {terms.map((term) => (
        <Term {...term} />
      ))}
    </div>
  );
};

export default Terms;
