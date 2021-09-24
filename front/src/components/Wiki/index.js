import { Link, useLocation } from "react-router-dom";

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
                    <WikiCategory title="Géographie" content="blablabla" />
                    <WikiCategory title="Architecture" content="blablabla" />
                    <WikiCategory title="Langue" content="blablabla" />
                </div>
                <div className="links-container">
                    <a href="#wiki__category-histoire">Histoire</a>
                    <a href="#wiki__category-géographie">Géographie</a>
                    <a href="#wiki__category-architecture">Architecture</a>
                    <a href="#wiki__category-langue">Langue</a>
                </div>
            </div>
        </div>
  );
};

export default Wiki;
