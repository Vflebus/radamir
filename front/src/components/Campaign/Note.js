import cadre from "../../assets/images/parchment.png"

const Note = () => {
    return (
        <button className="noteContainer">
            <img src={cadre} alt=""/>
            <h4>Titre de la note</h4>
        </button>
    )
};

export default Note;