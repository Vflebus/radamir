import PropTypes from "prop-types";
import photo from "../../assets/images/vincent-photo.webp"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Card, Image } from "semantic-ui-react";

const Member = ({ name, role, img, github, linkedin }) => (
  <Card className="member">
    <Image src={img} alt="Profile" className="member__img"  />
    <Card.Content>
      <Card.Header className="member__title">{name}</Card.Header>
      <Card.Meta className="member__role">{role}</Card.Meta>
      <Card.Description>
        <ul className="member__links">
          <li className="member__link">
            {github && (
              <a
                href={`https://www.github.com/${github}`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="member__link-icon"
                />
                Github
              </a>
            )}
          </li>
          <li className="member__link">
            {linkedin && (
              <a
                href={`https://www.linkedin.com/in/${linkedin}`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="member__link-icon"
                />
                LinkedIn
              </a>
            )}
          </li>
        </ul>
      </Card.Description>
    </Card.Content>
  </Card>
);

Member.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};

export default Member;

// const Member = ({ name, role, img, github, linkedin }) => {
//   return (
//     <div className="member">
//       <h2 className="member__title">{name}</h2>
//       <h3 className="member__role">{role}</h3>
//       <div className="member__content">
//         {/* <FontAwesomeIcon icon={faUser} className="member__img" /> */}
//         {/* Replace previous line with following line when we have pictures */}
//         <img src={img} alt="Profile" className="member__img" />
//         <div>
// <ul className="member__links">
//   <li className="member__link">
//     {github && (
//       <a
//         href={`https://www.github.com/${github}`}
//         target="_blank"
//         rel="noreferrer"
//       >
//         <FontAwesomeIcon
//           icon={faGithub}
//           className="member__link-icon"
//         />
//         Github
//       </a>
//     )}
//   </li>
//   <li className="member__link">
//     {linkedin && (
//       <a
//         href={`https://www.linkedin.com/in/${linkedin}`}
//         target="_blank"
//         rel="noreferrer"
//       >
//         <FontAwesomeIcon
//           icon={faLinkedin}
//           className="member__link-icon"
//         />
//         LinkedIn
//       </a>
//     )}
//   </li>
// </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Member;
