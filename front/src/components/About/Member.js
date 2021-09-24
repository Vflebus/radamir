const Member = ({ name, img, github, linkedin }) => {
  return (
    <div className={`member`}>
      <h2 className="member__title">{name}</h2>
      <div className="member__content">
        <img src={img} alt="Profile" className="member__img" />
        <div className="member__links">
          <ul>
            <li className="member__link">
              <a
                href={`https://www.github.com/${github}`}
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li className="member__link">
              <a
                href={`https://www.linkedin.com/${linkedin}`}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Member;
