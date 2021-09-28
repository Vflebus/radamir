import { useLocation } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';

import WikiCategory from "./WikiCategory";
import Menu from "../Menu"

// import arrow from "../../assets/images/flecheNavRouge.png";
import "./wiki.scss";

const Wiki = () => {
  const { pathname } = useLocation();

  return (  
        <div>
            <Menu />
            <div className="wiki">
                <h1 className="wiki__title">Titre Section</h1>
                {/* <Link to="/wiki" className="to-wiki">
                    <img src={arrow} alt="Retour à l'index" />
                    Retour à l'index
                </Link> */}
                <select
                    name="links"
                    className="wiki__select"
                    onChange={(e) => window.location.assign(pathname + e.target.value)}
                >
                    <option value="#">-- Sélectionnez une option --</option>
                    <option value="#wiki__category-histoire">Histoire</option>
                    <option value="#wiki__category-géographie">Géographie</option>
                    <option value="#wiki__category-architecture">Architecture</option>
                    <option value="#wiki__category-langue">Langue</option>
                </select>
                <div className="wiki__page">
                    <div className="category-container">
                        <WikiCategory title="Histoire" content={"Au Nord du Royaume de Kervollen s'étendent les majestueuses forêts du Bois de Feidlimid, terres ancestrales des elfes sylvains. Le climat est doux et clément, et la végétation s'étend à perte de vue jusqu'aux confins du continent, entrecoupées seulement de quelques monts rocheux, de lacs et de rivières. Les bois sont épais, n'étant pas du tout entretenus, les Elfes vivant en harmonie avec la nature.\r\n\r\nÀ l'Ouest cependant, à la frontière avec l'Empire de Karnaclok, les terres ont été partiellement déboisées et la  repousse des arbres est devenue difficile. Ce problème est source de tensions croissantes avec les Nains. À l'Est, le Ravin de Drustan est une frontière physique avec les terres des Elfes Noirs. Profond d'une vingtaine de mètres, il marque clairement la limite des  Bois de Feidlimid. Au Nord, les forêts donnent sur des plages de sable fin, où aucun peuple n'a jugé bon de tenter d'installer un port..."} />
                        <WikiCategory title="Géographie" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum molestiae vitae illo sit dolorem saepe aliquam eligendi vero quibusdam facere! Tenetur accusamus fugit odio incidunt nobis veniam minus repudiandae quidem necessitatibus sit ducimus sapiente quaerat, eos rem repellat quibusdam delectus iste nam esse ab earum amet ipsa, molestiae id? Quidem recusandae quis, repellat ipsum suscipit praesentium facilis vel at ut molestiae quam dolores ab odio, ratione, enim aperiam voluptas minima vero rem maiores! Sequi ratione et asperiores amet! A minima inventore alias facilis deserunt ipsam? Itaque ipsam, tempore nesciunt doloremque deserunt blanditiis esse enim! Quod quas nostrum aspernatur praesentium. Voluptate repellendus officia blanditiis perspiciatis libero quasi dolore aliquid ut placeat provident quia voluptatibus dolores ad molestias, esse iure maxime ea inventore quis soluta nam. Cumque ut quas ducimus nam a, minus tempore sed est provident voluptatibus itaque molestiae dolorum aperiam culpa consectetur eos ad nobis debitis! Ipsum perspiciatis tempora dolor animi, nostrum non impedit enim asperiores aspernatur dolorum dicta amet eaque itaque quam placeat quas fugit iure aut sequi? Accusamus expedita exercitationem ipsam unde iure perferendis distinctio ut, vero debitis. Distinctio quam, libero, minus esse animi est sunt nesciunt pariatur tempore expedita commodi quasi dicta repellendus quod nobis in nostrum?" />
                        <WikiCategory title="Architecture" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum molestiae vitae illo sit dolorem saepe aliquam eligendi vero quibusdam facere! Tenetur accusamus fugit odio incidunt nobis veniam minus repudiandae quidem necessitatibus sit ducimus sapiente quaerat, eos rem repellat quibusdam delectus iste nam esse ab earum amet ipsa, molestiae id? Quidem recusandae quis, repellat ipsum suscipit praesentium facilis vel at ut molestiae quam dolores ab odio, ratione, enim aperiam voluptas minima vero rem maiores! Sequi ratione et asperiores amet! A minima inventore alias facilis deserunt ipsam? Itaque ipsam, tempore nesciunt doloremque deserunt blanditiis esse enim! Quod quas nostrum aspernatur praesentium. Voluptate repellendus officia blanditiis perspiciatis libero quasi dolore aliquid ut placeat provident quia voluptatibus dolores ad molestias, esse iure maxime ea inventore quis soluta nam. Cumque ut quas ducimus nam a, minus tempore sed est provident voluptatibus itaque molestiae dolorum aperiam culpa consectetur eos ad nobis debitis! Ipsum perspiciatis tempora dolor animi, nostrum non impedit enim asperiores aspernatur dolorum dicta amet eaque itaque quam placeat quas fugit iure aut sequi? Accusamus expedita exercitationem ipsam unde iure perferendis distinctio ut, vero debitis. Distinctio quam, libero, minus esse animi est sunt nesciunt pariatur tempore expedita commodi quasi dicta repellendus quod nobis in nostrum?" />
                        <WikiCategory title="Langue" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum molestiae vitae illo sit dolorem saepe aliquam eligendi vero quibusdam facere! Tenetur accusamus fugit odio incidunt nobis veniam minus repudiandae quidem necessitatibus sit ducimus sapiente quaerat, eos rem repellat quibusdam delectus iste nam esse ab earum amet ipsa, molestiae id? Quidem recusandae quis, repellat ipsum suscipit praesentium facilis vel at ut molestiae quam dolores ab odio, ratione, enim aperiam voluptas minima vero rem maiores! Sequi ratione et asperiores amet! A minima inventore alias facilis deserunt ipsam? Itaque ipsam, tempore nesciunt doloremque deserunt blanditiis esse enim! Quod quas nostrum aspernatur praesentium. Voluptate repellendus officia blanditiis perspiciatis libero quasi dolore aliquid ut placeat provident quia voluptatibus dolores ad molestias, esse iure maxime ea inventore quis soluta nam. Cumque ut quas ducimus nam a, minus tempore sed est provident voluptatibus itaque molestiae dolorum aperiam culpa consectetur eos ad nobis debitis! Ipsum perspiciatis tempora dolor animi, nostrum non impedit enim asperiores aspernatur dolorum dicta amet eaque itaque quam placeat quas fugit iure aut sequi? Accusamus expedita exercitationem ipsam unde iure perferendis distinctio ut, vero debitis. Distinctio quam, libero, minus esse animi est sunt nesciunt pariatur tempore expedita commodi quasi dicta repellendus quod nobis in nostrum?" />
                    </div>
                    <div className="links-container">
                        <ul>
                            <li><ScrollLink to="wiki__category-histoire" className="categorySelector" offset={-300} spy={true} smooth={true} >Histoire</ScrollLink></li>
                            <li><ScrollLink to="wiki__category-géographie" className="categorySelector" offset={-300} spy={true} smooth={true}>géographie</ScrollLink></li>
                            <li><ScrollLink to="wiki__category-architecture" className="categorySelector" offset={-300} spy={true} smooth={true}>architecture</ScrollLink></li>
                            <li><ScrollLink to="wiki__category-langue" className="categorySelector" offset={-300} spy={true} smooth={true}>langue</ScrollLink></li>
            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Wiki;
