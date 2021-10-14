import Member from "./Member";
import MotionWrapper from "../MotionWrapper";

import "./about.scss";

import members from "./members.json";

const About = () => {
  return (
    <MotionWrapper>
      <div className="about-container">
        <div className="about">
          <h1 className="about__title">à propos</h1>
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
