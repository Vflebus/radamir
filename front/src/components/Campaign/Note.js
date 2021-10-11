import cadre from "../../assets/images/parchment.png"

const Note = () => {
    return (
        <div className="noteContainer">
            <img src={cadre} alt=""/>
            <h4>Titre de la note</h4>
        </div>
    )
};

export default Note;