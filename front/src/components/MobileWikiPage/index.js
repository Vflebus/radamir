import { useSelector } from "react-redux";

import Category from "./Category";
import MotionWrapper from "../MotionWrapper";

import "./style.scss"

const MobileWikiPage = () => {
    const wikis = useSelector(({ wikis }) => wikis.list);
    
    return (
        <MotionWrapper>
            <div className="mobileWikiPage">
                <h1>Radamir</h1>
                <div className="mobileWikiPage__allCategories">
                    {wikis.map(({ id, title, block }) => <Category key={id} title={title} block={block} />)}
                </div>
            </div>
        </MotionWrapper>
    )
};

export default MobileWikiPage;