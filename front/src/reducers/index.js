import { combineReducers } from "redux";

import wikisReducer from "./wikis";
import userReducer from "./user";
import errorReducer from "./error";
import blocksReducer from "./blocks";

const rootReducer = combineReducers({
  wikis: wikisReducer,
  user: userReducer,
  error: errorReducer,
  blocks: blocksReducer
});

export default rootReducer;
