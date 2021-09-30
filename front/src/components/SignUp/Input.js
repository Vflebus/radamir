import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import { setInput } from "../../actions/user";

const Input = ({ inputId, label, type }) => {
  const dispatch = useDispatch();
  const value = useSelector(({user}) => user[inputId]);

  const handleChange = (e) => {
    dispatch(setInput(e.target.value, inputId));
  };

  return (
    <div className="form-field">
      <label htmlFor={inputId}>{label} :</label>
      <input
        value={value}
        onChange={handleChange}
        type={type}
        id={inputId}
      />
    </div>
  );
};

Input.defaultProps = {
  type: "text"
};

Input.propTypes = {
  type: PropTypes.string,
  inputId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
