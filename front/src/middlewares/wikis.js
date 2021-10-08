import radamirAPI from "../apis/radamirAPI";
import {
  FETCH_WIKIS,
  CREATE_WIKI,
  UPDATE_WIKI,
  saveWikis,
  fetchWikis,
  setTitle,
  setType
} from "../actions/wikis";
import { setError, clearError } from "../actions/error";
import { cleanTitleSlug } from "../selectors/wikis";

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

        const { cleanTitle, slug } = cleanTitleSlug(title);

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

    case UPDATE_WIKI:
      try {
        const { title } = store.getState().wikis;

        const { cleanTitle, slug } = cleanTitleSlug(title);

        await radamirAPI.patch(`/wiki/${action.id}`, {
          title: cleanTitle,
          slug
        });

        store.dispatch(setTitle(""));
        store.dispatch(fetchWikis());
      } catch (err) {
        console.log(err);
      }
      next(action);
      break;
    
    default:
      next(action);
      break;
  }
};

export default wikisMiddleware;