import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import wikiParchment from "../../assets/images/wikiParchment.png"

const ListItem = ({ route, name }) => {
  return (
    <li>
      <div className="itemContainer">
        <Link to={`/wiki/${route}`} className="wikis__section-link">
          <img src={wikiParchment} alt="" className="wikiParchment"/>
          <p className="itemName">{name}</p>
        </Link>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  route: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ListItem;
