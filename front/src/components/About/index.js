import Member from "./Member";

import members from "./members.json";

const About = () => {
  return (
    <div className="about">
      <h1 className="about__title">à propos</h1>
      <div className="about__team">
        {members.map((member) => (
          <Member {...member} />
        ))}
      </div>
    </div>
  );
};

export default About;
