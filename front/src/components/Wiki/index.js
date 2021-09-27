import { Link, NavLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';

import WikiCategory from "./WikiCategory";
import Menu from "../Menu"

import arrow from "../../assets/images/flecheNavRouge.png";
import "./wiki.scss";

const Wiki = () => {
  const { pathname } = useLocation();

  return (  
        <div className="wiki">
            <h1 className="wiki__title">Titre Section</h1>
            <Link to="/wiki" className="to-wiki">
                <img src={arrow} alt="Retour à l'index" />
                Retour à l'index
            </Link>
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
                    <WikiCategory title="Histoire" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia facilis reprehenderit dolor, suscipit sunt architecto ex modi accusantium illo qui atque cupiditate, ipsam incidunt doloremque numquam et, ab ratione. Repudiandae, rem nisi. Cumque modi beatae distinctio corporis placeat dolores sed obcaecati aliquam magni a quaerat, ipsam voluptatum animi reiciendis natus voluptate fugiat quam fuga? Aspernatur sequi cumque, officia saepe ad, accusantium aperiam doloribus vitae omnis perferendis vel commodi, dignissimos pariatur? Perferendis vero esse odio laudantium mollitia accusantium maiores non deleniti voluptatem asperiores sequi eos consequatur quibusdam, at quasi corporis placeat amet atque incidunt praesentium odit quos illo quisquam dolore! Deserunt asperiores labore debitis, sit ullam quidem commodi harum officia eaque incidunt cum unde at enim voluptatibus distinctio repudiandae mollitia, consequuntur earum. Expedita quisquam, fuga unde voluptatum minima quis illo laudantium, dignissimos voluptates atque eligendi optio consequuntur illum? Reiciendis, exercitationem, inventore quam consequuntur odit officia laudantium unde cum, pariatur impedit nostrum quod. Impedit, veritatis voluptates voluptatum cumque perferendis unde velit ipsam? Asperiores beatae libero ab assumenda sint eveniet dolorem voluptas reiciendis nemo animi facilis similique nobis quos, odit neque nostrum nihil doloremque cupiditate dolorum totam impedit. Voluptates animi est molestiae iure. Quibusdam hic, mollitia alias fugiat autem saepe corporis cupiditate?" />
                    <WikiCategory title="Géographie" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum molestiae vitae illo sit dolorem saepe aliquam eligendi vero quibusdam facere! Tenetur accusamus fugit odio incidunt nobis veniam minus repudiandae quidem necessitatibus sit ducimus sapiente quaerat, eos rem repellat quibusdam delectus iste nam esse ab earum amet ipsa, molestiae id? Quidem recusandae quis, repellat ipsum suscipit praesentium facilis vel at ut molestiae quam dolores ab odio, ratione, enim aperiam voluptas minima vero rem maiores! Sequi ratione et asperiores amet! A minima inventore alias facilis deserunt ipsam? Itaque ipsam, tempore nesciunt doloremque deserunt blanditiis esse enim! Quod quas nostrum aspernatur praesentium. Voluptate repellendus officia blanditiis perspiciatis libero quasi dolore aliquid ut placeat provident quia voluptatibus dolores ad molestias, esse iure maxime ea inventore quis soluta nam. Cumque ut quas ducimus nam a, minus tempore sed est provident voluptatibus itaque molestiae dolorum aperiam culpa consectetur eos ad nobis debitis! Ipsum perspiciatis tempora dolor animi, nostrum non impedit enim asperiores aspernatur dolorum dicta amet eaque itaque quam placeat quas fugit iure aut sequi? Accusamus expedita exercitationem ipsam unde iure perferendis distinctio ut, vero debitis. Distinctio quam, libero, minus esse animi est sunt nesciunt pariatur tempore expedita commodi quasi dicta repellendus quod nobis in nostrum?" />
                    <WikiCategory title="Architecture" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum molestiae vitae illo sit dolorem saepe aliquam eligendi vero quibusdam facere! Tenetur accusamus fugit odio incidunt nobis veniam minus repudiandae quidem necessitatibus sit ducimus sapiente quaerat, eos rem repellat quibusdam delectus iste nam esse ab earum amet ipsa, molestiae id? Quidem recusandae quis, repellat ipsum suscipit praesentium facilis vel at ut molestiae quam dolores ab odio, ratione, enim aperiam voluptas minima vero rem maiores! Sequi ratione et asperiores amet! A minima inventore alias facilis deserunt ipsam? Itaque ipsam, tempore nesciunt doloremque deserunt blanditiis esse enim! Quod quas nostrum aspernatur praesentium. Voluptate repellendus officia blanditiis perspiciatis libero quasi dolore aliquid ut placeat provident quia voluptatibus dolores ad molestias, esse iure maxime ea inventore quis soluta nam. Cumque ut quas ducimus nam a, minus tempore sed est provident voluptatibus itaque molestiae dolorum aperiam culpa consectetur eos ad nobis debitis! Ipsum perspiciatis tempora dolor animi, nostrum non impedit enim asperiores aspernatur dolorum dicta amet eaque itaque quam placeat quas fugit iure aut sequi? Accusamus expedita exercitationem ipsam unde iure perferendis distinctio ut, vero debitis. Distinctio quam, libero, minus esse animi est sunt nesciunt pariatur tempore expedita commodi quasi dicta repellendus quod nobis in nostrum?" />
                    <WikiCategory title="Langue" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum molestiae vitae illo sit dolorem saepe aliquam eligendi vero quibusdam facere! Tenetur accusamus fugit odio incidunt nobis veniam minus repudiandae quidem necessitatibus sit ducimus sapiente quaerat, eos rem repellat quibusdam delectus iste nam esse ab earum amet ipsa, molestiae id? Quidem recusandae quis, repellat ipsum suscipit praesentium facilis vel at ut molestiae quam dolores ab odio, ratione, enim aperiam voluptas minima vero rem maiores! Sequi ratione et asperiores amet! A minima inventore alias facilis deserunt ipsam? Itaque ipsam, tempore nesciunt doloremque deserunt blanditiis esse enim! Quod quas nostrum aspernatur praesentium. Voluptate repellendus officia blanditiis perspiciatis libero quasi dolore aliquid ut placeat provident quia voluptatibus dolores ad molestias, esse iure maxime ea inventore quis soluta nam. Cumque ut quas ducimus nam a, minus tempore sed est provident voluptatibus itaque molestiae dolorum aperiam culpa consectetur eos ad nobis debitis! Ipsum perspiciatis tempora dolor animi, nostrum non impedit enim asperiores aspernatur dolorum dicta amet eaque itaque quam placeat quas fugit iure aut sequi? Accusamus expedita exercitationem ipsam unde iure perferendis distinctio ut, vero debitis. Distinctio quam, libero, minus esse animi est sunt nesciunt pariatur tempore expedita commodi quasi dicta repellendus quod nobis in nostrum?" />
                </div>
                <div className="links-container">
                    <ul>
                        <li><ScrollLink to="wiki__category-histoire" className="categorySelector" offset={-150} spy={true} >Histoire</ScrollLink></li>
                        <li><ScrollLink to="wiki__category-géographie" className="categorySelector" offset={-150} spy={true}>géographie</ScrollLink></li>
                        <li><ScrollLink to="wiki__category-architecture" className="categorySelector" offset={-150} spy={true}>architecture</ScrollLink></li>
                        <li><ScrollLink to="wiki__category-langue" className="categorySelector" offset={-150} spy={true}>langue</ScrollLink></li>
                        
                    </ul>
                </div>
            </div>
        </div>
  );
};

export default Wiki;
