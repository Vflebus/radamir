import radamirAPI from "../apis/radamirAPI";
import {
  CREATE_BLOCK,
  UPDATE_BLOCK,
  DELETE_BLOCK
} from "../actions/blocks";
import { fetchWikis } from "../actions/wikis";
import { clearError, setError } from "../actions/error";

const blocksMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case CREATE_BLOCK:
      try {
        store.dispatch(clearError());
        const { title, content } = store.getState().blocks;

        if (!title || !content) throw new Error("Veuillez renseigner des informations");

        if (title.length > 16) throw new Error("Titre trop long");

        await radamirAPI.post("/block", {
          wiki_id: action.id,
          title,
          content
        });

        store.dispatch(fetchWikis());
      } catch (err) {
        console.error(err);
        store.dispatch(setError(err.message));
      }
      next(action);
      break;

    case UPDATE_BLOCK:
      try {
        store.dispatch(clearError());
        const { title, content } = store.getState().blocks;

        if (!title || !content) throw new Error("Veuillez renseigner des informations");

        if (title.length > 16) throw new Error("Titre trop long");

        await radamirAPI.patch(`/block/${action.id}`, {
          title,
          content
        })

        store.dispatch(fetchWikis());
      } catch (err) {
        console.error(err);
        store.dispatch(setError(err.message));
      }
      next(action);
      break;

    case DELETE_BLOCK:
      try {
        await radamirAPI.delete(`/block/${action.id}`);

        store.dispatch(fetchWikis());
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

export default blocksMiddleware;