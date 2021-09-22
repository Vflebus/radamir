import PropTypes from "prop-types";

import ListItem from "./ListItem";

const WikiSection = ({ title }) => {
  return (
    <div className="wikis__section">
      <h2 className="wikis__section-title">{title}</h2>
      <ul className="wikis__section-list">
        <ListItem route="test-region" name="Test Région" />
        <ListItem route="test-region" name="Test Région" />
        <ListItem route="test-region" name="Test Région" />
      </ul>
    </div>
  );
};

WikiSection.propTypes = {
  title: PropTypes.string.isRequired,
};

export default WikiSection;
