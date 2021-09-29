import { useState } from "react";
import { Link } from "react-router-dom";

const Category = ( { title, intro }) => {

    const [isDeployed, setDeployed] = useState(false)
    const deployCategory = () => {
        setDeployed(!isDeployed);
    }


    return (
        <div className="mobileWikiPage__allCategories__categoryContainer">
            <div className="mobileWikiPage__allCategories__categoryContainer__titleContainer">
                <h2>{title}</h2>
                <button className={isDeployed ? "rotateUp" : ""} onClick={deployCategory}>&#8249;</button>
            </div>
            <div className={isDeployed ? "" : "unDeployed"}>
                <p className="intro">{intro}</p>
                <Link to={`/wiki/${title.toLowerCase()}`} className="moreButton">En savoir plus</Link>
            </div>
        </div>
    )
}

export default Category;