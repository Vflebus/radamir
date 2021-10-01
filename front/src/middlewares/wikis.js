import { FETCH_WIKIS, saveWikis } from "../actions/wikis";

const wikisMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_WIKIS:
      // TODO:
      break;
    
    default:
      next(action);
      break;
  }
};

export default wikisMiddleware;