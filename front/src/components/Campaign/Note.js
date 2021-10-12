import { useState } from "react";
import cadre from "../../assets/images/parchment.png"
import NoteModal from "./NoteModal";

const Note = () => {

    const [isOpen, setIsOpen] = useState(false);

    function noScroll() {
        window.scrollTo(0, 0);
    }

    const openModal = () => {
        setIsOpen(true);
        console.log (isOpen);
    }

    const onClose = () => {
        setIsOpen(false);
    }

    const title = "Titre de la note"
    const content ="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem cumque consequatur velit possimus explicabo maiores iste facilis numquam. Recusandae quisquam, explicabo blanditiis voluptate beatae dignissimos fugiat sunt aperiam incidunt perspiciatis delectus! Obcaecati provident dolorem magni dolore consectetur maxime nesciunt libero rerum exercitationem ut nemo iusto explicabo est delectus voluptas impedit voluptatum unde necessitatibus, quas dicta? Ea in temporibus possimus iusto? Molestiae repellat cum impedit repellendus iure minima, nostrum totam voluptates ea, quisquam eius laudantium iusto reiciendis pariatur repudiandae est deleniti maxime quaerat. Omnis, ipsam quasi eligendi adipisci eveniet libero perspiciatis sint animi, esse maxime saepe. Quidem at nisi velit soluta!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem cumque consequatur velit possimus explicabo maiores iste facilis numquam. Recusandae quisquam, explicabo blanditiis voluptate beatae dignissimos fugiat sunt aperiam incidunt perspiciatis delectus! Obcaecati provident dolorem magni dolore consectetur maxime nesciunt libero rerum exercitationem ut nemo iusto explicabo est delectus voluptas impedit voluptatum unde necessitatibus, quas dicta? Ea in temporibus possimus iusto? Molestiae repellat cum impedit repellendus iure minima, nostrum totam voluptates ea, quisquam eius laudantium iusto reiciendis pariatur repudiandae est deleniti maxime quaerat. Omnis, ipsam quasi eligendi adipisci eveniet libero perspiciatis sint animi, esse maxime saepe. Quidem at nisi velit soluta!"

    return (
        <>
            <button className="noteContainer" onClick={openModal}>
                <img src={cadre} alt=""/>
                <h4>{title}</h4>
            </button>
            <NoteModal open={isOpen} onClose={onClose} title={title} content={content}/>
        </>
    )
};

export default Note;