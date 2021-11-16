import Member from "./Member";
import MotionWrapper from "../MotionWrapper";

import "./about.scss";

import members from "./members.js";

const About = () => {
  return (
    <MotionWrapper>
      <div className="about-container">
        <div className="about">
          <h1 className="about__title">à propos</h1>
          <p>
            Bonjour à vous, et bienvenue sur le site de Radamir ! <br/>
            Ce site web a été réalisé dans le cadre d'un projet de fin de formation par une équipe de 5 développeurs, et sur une durée de 1 mois. Sur ce site, vous aurez accès aux diverses informations disponnibles sur l'univers de Radamir, un univers fictif servant de base à une campagne de jeu de rôle.
            Vous pourrez également, en vous connectant, accéder à la partie "campagnes" du site. Là, vous trouverez un gestionnaire de campagnes permettant de créer et de partager des notes sur une campagne de jeu de rôle. <br/>
            Bien que le projet soit terminé, je continue d'ajouter régulièrement de nouvelles fonctionnalités au site, et j'espère que vous passerez une agréable visite dans l'univers de Radamir ! <br/> <br/>
            -Vincent, product owner
          </p>
          <h2 className="about__subTitle">L'équipe derrière Radamir</h2>
          <div className="about__team">
            {members.map((member) => (
              <Member key={member.name} {...member} />
            ))}
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
};

export default About;
