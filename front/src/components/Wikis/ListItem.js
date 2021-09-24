import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ListItem = ({ route, name }) => {
  return (
    <li>
      <Link to={`/wiki/${route}`} className="wikis__section-link">
        {name}
      </Link>
    </li>
  );
};

ListItem.propTypes = {
  route: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ListItem;
