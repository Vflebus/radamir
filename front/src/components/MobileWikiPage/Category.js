import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

const Category = ( { title, block, route }) => {

    const [isDeployed, setDeployed] = useState(false)
    const deployCategory = () => {
        setDeployed(!isDeployed);
    }

    const oneBlock = block.find(({ title }) => title === "Historique");

    return (
        <div className="mobileWikiPage__allCategories__categoryContainer">
            <div className="mobileWikiPage__allCategories__categoryContainer__titleContainer">
                <h2>{title}</h2>
                <button className={isDeployed ? "rotateUp" : ""} onClick={deployCategory}>&#8249;</button>
            </div>
            <div className={isDeployed ? "" : "unDeployed"}>
                <p className="intro">{oneBlock && oneBlock.content}</p>
                <Link to={`/wiki/${route}`} className="moreButton">En savoir plus</Link>
            </div>
        </div>
    )
}

Category.defaultProp = {
    block: [{}]
};

Category.propTypes = {
    title: PropTypes.string.isRequired,
    block: PropTypes.arrayOf(
        PropTypes.shape({
            content: PropTypes.string
        })
    ),
    route: PropTypes.string.isRequired
};

export default Category;