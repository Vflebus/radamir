import PropTypes from "prop-types";

import ListItem from "./ListItem";

const WikiSection = ({ title, links }) => {
  return (
    <div className="wikis__section">
      <h2 className="wikis__section-title">{title}</h2>
      <ul className="wikis__section-list">
        {links.map(({ name, route }) => {
          return <ListItem key={route} route={route} name={name} />;
        })}
      </ul>
    </div>
  );
};

WikiSection.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default WikiSection;
