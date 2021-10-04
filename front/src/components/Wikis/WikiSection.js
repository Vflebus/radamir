import PropTypes from "prop-types";

import ListItem from "./ListItem";

const WikiSection = ({ header, links }) => {
  return (
    <div className="wikis__section">
      <h2 className="wikis__section-title">{header}</h2>
      <ul className="wikis__section-list">
        {links.map(({ title, slug, id }) => {
          return <ListItem key={id} route={slug} name={title} />;
        })}
      </ul>
    </div>
  );
};

WikiSection.propTypes = {
  header: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default WikiSection;
