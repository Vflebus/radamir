import ListItem from "./ListItem";

import "./wikis.scss";

const Wikis = () => {
  return (
    <div className="wikis">
      <h1 className="wikis__title">Index du Wiki</h1>
      <div className="wikis__regions">
        <h2 className="wikis__regions-title">Régions</h2>
        <ul className="wikis__regions-list">
          <ListItem category="regions" route="test-region" name="Test Région" />
          <ListItem category="regions" route="test-region" name="Test Région" />
          <ListItem category="regions" route="test-region" name="Test Région" />
        </ul>
      </div>
      <div className="wikis__others">
        <ul className="wikis__others-list">
          <ListItem category="others" route="test-others" name="Test Other" />
          <ListItem category="others" route="test-others" name="Test Other" />
          <ListItem category="others" route="test-others" name="Test Other" />
        </ul>
      </div>
    </div>
  );
};

export default Wikis;
