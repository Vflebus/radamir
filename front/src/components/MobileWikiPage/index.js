import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Category from "./Category";
import MotionWrapper from "../MotionWrapper";
import AddWikiModal from "../AddWikiModal";

import { setTitle, setType } from "../../actions/wikis";
import { clearError } from "../../actions/error";

import "./style.scss"

const MobileWikiPage = () => {
    const dispatch = useDispatch();
    const wikis = useSelector(({ wikis }) => wikis.list);
    const { is_admin } = useSelector(({ user: { loggedUser } }) => loggedUser);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const location = useLocation();
    useEffect(() => {
        setIsModalOpen(false);
      }, [location]);
    
      const openModal = () => {
        setIsModalOpen(true);
      };

      const onClose = () => {
        setIsModalOpen(false);
        dispatch(setType("region"));
        dispatch(setTitle(""));
        dispatch(clearError());
      };
    
    return (
        <MotionWrapper>
            <div className="mobileWikiPage">
                <h1>Radamir</h1>
                {is_admin && (
                <>
                    <button onClick={openModal} className="mobileModalButton">Créer un wiki</button>
                    <AddWikiModal open={isModalOpen} onClose={onClose} />
                </>
                )}
                <div className="mobileWikiPage__allCategories">
                    {wikis.map(({ id, title, block, slug }) => (
                        <Category
                            key={id}
                            title={title}
                            block={block}
                            route={slug}
                        />
                    ))}
                </div>
            </div>
        </MotionWrapper>
    )
};

export default MobileWikiPage;