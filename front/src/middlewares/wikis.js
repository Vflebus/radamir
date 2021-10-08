import radamirAPI from "../apis/radamirAPI";
import { FETCH_WIKIS, CREATE_WIKI, saveWikis } from "../actions/wikis";
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
        
        const slug = title
                      .replaceAll(/[^a-zA-Z0-9\s_-]/g, "")
                      .replaceAll(" ", "-")
                      .toLowerCase();

        await radamirAPI.post("/wiki", { title, type, slug });
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