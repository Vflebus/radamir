import PropTypes from "prop-types";

import ListItem from "./ListItem";

const WikiSection = ({ category, title }) => {
  return (
    <div className={`wikis__${category}`}>
      <h2 className={`wikis__${category}-title`}>{title}</h2>
      <ul className={`wikis__${category}-list`}>
        <ListItem category={category} route="test-region" name="Test Région" />
        <ListItem category={category} route="test-region" name="Test Région" />
        <ListItem category={category} route="test-region" name="Test Région" />
      </ul>
    </div>
  );
};

WikiSection.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default WikiSection;
