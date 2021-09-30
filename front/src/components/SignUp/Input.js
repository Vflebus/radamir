import PropTypes from "prop-types";

const Input = ({ forId, label, type }) => {
  return (
    <div className="signup__input">
      <label htmlFor={forId}>{label} :</label>
      <input type={type} id={forId} />
    </div>
  );
};

Input.defaultProps = {
  type: "text"
};

Input.propTypes = {
  forId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;