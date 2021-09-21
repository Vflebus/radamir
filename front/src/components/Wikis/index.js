import Region from "./Region";
import Other from "./Other";

const Wikis = () => {
  return (
    <div className="wikis">
      <h1 className="wikis__title">Index du Wiki</h1>
      <div className="wikis__regions">
        <h2 className="wikis__regions-title">Régions</h2>
        <ul className="wikis__regions-list">
          <Region />
        </ul>
      </div>
      <div className="wikis__others">
        <ul className="wikis__others-list">
          <Other />
        </ul>
      </div>
    </div>
  );
};

export default Wikis;
