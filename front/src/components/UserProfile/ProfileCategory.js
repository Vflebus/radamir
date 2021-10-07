import PropTypes from "prop-types";

import FormField from "../FormField";

const ProfileCategory = ({ title, content, inputId, label, type }) => {
  return (
    <div className="profile__info">
      <h2 className="profile__info-title">{title}</h2>
      <p className="profile__info-content">{content}</p>
      <FormField inputId={inputId} label={label} type={type} />
    </div>
  );
};

ProfileCategory.defaultProps = {
  type: "text",
  content: ""
};

ProfileCategory.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  inputId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default ProfileCategory;