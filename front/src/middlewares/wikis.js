import radamirAPI from "../apis/radamirAPI";
import { FETCH_WIKIS, saveWikis } from "../actions/wikis";

const wikisMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_WIKIS:
      try {
        const res = await radamirAPI.get("/wiki");
        store.dispatch(saveWikis(res.data));
      } catch (err) {
        console.error(err);
      }
      next(action);
      break;
    
    default:
      next(action);
      break;
  }
};

export default wikisMiddleware;