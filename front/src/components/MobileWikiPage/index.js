import Category from "./Category";

import "./style.scss"

let datas = [
    {
        title: "Vanna",
        intro: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis obcaecati facilis voluptatem adipisci nostrum soluta suscipit, provident ex nesciunt beatae, quod nam vel, expedita laborum ducimus quia. Deserunt, a blanditiis?",
    },
    {
        title: "Karnaclok",
        intro: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis obcaecati facilis voluptatem adipisci nostrum soluta suscipit, provident ex nesciunt beatae, quod nam vel, expedita laborum ducimus quia. Deserunt, a blanditiis?",
    },
    {
        title: "Feidlimid",
        intro: "Au Nord du Royaume de Kervollen s'étendent les majestueuses forêts du Bois de Feidlimid, terres ancestrales des elfes sylvains. Le climat est doux et clément, et la végétation s'étend à perte de vue jusqu'aux confins du continent, entrecoupées seulement de quelques monts rocheux, de lacs et de rivières. Les bois sont épais, n'étant pas du tout entretenus, les Elfes vivant en harmonie avec la nature.\r\n\r\nÀ l'Ouest cependant, à la frontière avec l'Empire de Karnaclok, les terres ont été partiellement déboisées et la  repousse des arbres est devenue difficile. Ce problème est source de tensions croissantes avec les Nains. À l'Est, le Ravin de Drustan est une frontière physique avec les terres des Elfes Noirs. Profond d'une vingtaine de mètres, il marque clairement la limite des  Bois de Feidlimid. Au Nord, les forêts donnent sur des plages de sable fin, où aucun peuple n'a jugé bon de tenter d'installer un port...",
    },
    {
        title: "Magie",
        intro: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis obcaecati facilis voluptatem adipisci nostrum soluta suscipit, provident ex nesciunt beatae, quod nam vel, expedita laborum ducimus quia. Deserunt, a blanditiis?",
    }
]

const MobileWikiPage = () => {
    return (
        <div className="mobileWikiPage">
            <h1>Radamir</h1>
            <div className="mobileWikiPage__allCategories">
                {datas.map(data => <Category title={data.title} intro={data.intro} />)}
            </div>
        </div>
    )
};

export default MobileWikiPage;