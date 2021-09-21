import PropTypes from "prop-types";

const ListItem = ({ category, route, name }) => {
  return (
    <li className={`wikis__${category}-list-item`}>
      <a href={`/wiki/${route}`} className={`wikis__${category}-link`}>
        {name}
      </a>
    </li>
  );
};

ListItem.propTypes = {
  category: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ListItem;
