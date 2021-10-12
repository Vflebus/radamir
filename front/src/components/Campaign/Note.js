import { useState } from "react";
import cadre from "../../assets/images/parchment.png"
import NoteModal from "../NoteModal";
import MyNoteModal from "../MyNoteModal";
import EditNoteModal from "../EditNoteModal";

const Note = () => {

    const isMine = true;
    const is_private = true;
    const [isOpen, setIsOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
        console.log (isOpen);
    }

    const onClose = () => {
        setIsOpen(false);
        setIsEditOpen(false);
    }

    const handleEdit = () => {
        setIsOpen(false);
        setIsEditOpen(true);
    }

    const title = "Titre de la note"
    const content ="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem cumque consequatur velit possimus explicabo maiores iste facilis numquam. Recusandae quisquam, explicabo blanditiis voluptate beatae dignissimos fugiat sunt aperiam incidunt perspiciatis delectus! Obcaecati provident dolorem magni dolore consectetur maxime nesciunt libero rerum exercitationem ut nemo iusto explicabo est delectus voluptas impedit voluptatum unde necessitatibus, quas dicta? Ea in temporibus possimus iusto? Molestiae repellat cum impedit repellendus iure minima, nostrum totam voluptates ea, quisquam eius laudantium iusto reiciendis pariatur repudiandae est deleniti maxime quaerat. Omnis, ipsam quasi eligendi adipisci eveniet libero perspiciatis sint animi, esse maxime saepe. Quidem at nisi velit soluta!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem cumque consequatur velit possimus explicabo maiores iste facilis numquam. Recusandae quisquam, explicabo blanditiis voluptate beatae dignissimos fugiat sunt aperiam incidunt perspiciatis delectus! Obcaecati provident dolorem magni dolore consectetur maxime nesciunt libero rerum exercitationem ut nemo iusto explicabo est delectus voluptas impedit voluptatum unde necessitatibus, quas dicta? Ea in temporibus possimus iusto? Molestiae repellat cum impedit repellendus iure minima, nostrum totam voluptates ea, quisquam eius laudantium iusto reiciendis pariatur repudiandae est deleniti maxime quaerat. Omnis, ipsam quasi eligendi adipisci eveniet libero perspiciatis sint animi, esse maxime saepe. Quidem at nisi velit soluta!"

    return (
        <>
            <button className="noteContainer" onClick={openModal}>
                <img src={cadre} alt=""/>
                <h4>{title}</h4>
            </button>
            {isMine ? <MyNoteModal open={isOpen} onClose={onClose} title={title} content={content} handleEdit={handleEdit}/> : <NoteModal open={isOpen} onClose={onClose} title={title} content={content}/>}
            <EditNoteModal open={isEditOpen} onClose={onClose} previousTitle={title} previousContent={content} is_private={is_private} />
        </>
    )
};

export default Note;