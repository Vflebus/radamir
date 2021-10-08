import radamirAPI from "../apis/radamirAPI";
import {
  FETCH_WIKIS,
  CREATE_WIKI,
  saveWikis,
  fetchWikis,
  setTitle,
  setType
} from "../actions/wikis";
import { setError, clearError } from "../actions/error";

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

    case CREATE_WIKI:
      try {
        store.dispatch(clearError());

        const { title, type } = store.getState().wikis;

        const cleanTitle = title.replaceAll(/[^A-zÀ-ü0-9\s_-]/g, "")
        
        const slug = cleanTitle
                      .replaceAll(" ", "-")
                      .toLowerCase();

        await radamirAPI.post("/wiki", {
          title: cleanTitle,
          type,
          slug
        });

        store.dispatch(setTitle(""));
        store.dispatch(setType("region"));
        store.dispatch(fetchWikis());
      } catch (err) {
        console.error(err);
        store.dispatch(setError(err.message));
      }
      next(action);
      break;
    
    default:
      next(action);
      break;
  }
};

export default wikisMiddleware;