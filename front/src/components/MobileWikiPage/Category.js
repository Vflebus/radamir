import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

const Category = ( { title, block }) => {

    const [isDeployed, setDeployed] = useState(false)
    const deployCategory = () => {
        setDeployed(!isDeployed);
    }

    const { content } = block.find(({ title }) => title === "Historique");

    return (
        <div className="mobileWikiPage__allCategories__categoryContainer">
            <div className="mobileWikiPage__allCategories__categoryContainer__titleContainer">
                <h2>{title}</h2>
                <button className={isDeployed ? "rotateUp" : ""} onClick={deployCategory}>&#8249;</button>
            </div>
            <div className={isDeployed ? "" : "unDeployed"}>
                <p className="intro">{content}</p>
                <Link to={`/wiki/${title.toLowerCase()}`} className="moreButton">En savoir plus</Link>
            </div>
        </div>
    )
}

Category.propTypes = {
    title: PropTypes.string.isRequired,
    block: PropTypes.arrayOf(
        PropTypes.shape({
            content: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Category;