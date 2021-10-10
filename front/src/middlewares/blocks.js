import radamirAPI from "../apis/radamirAPI";
import { CREATE_BLOCK } from "../actions/blocks";
import { fetchWikis } from "../actions/wikis";

const blocksMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case CREATE_BLOCK:
      try {
        const { title, content } = store.getState().blocks;

        // only for json-server
        await radamirAPI.post("/block", {
          wikiId: action.id,
          title,
          content
        });

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