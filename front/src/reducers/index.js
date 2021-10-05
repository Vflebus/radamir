import { combineReducers } from "redux";

import wikisReducer from "./wikis";
import userReducer from "./user";
import errorReducer from "./error";

const rootReducer = combineReducers({
  wikis: wikisReducer,
  user: userReducer,
  error: errorReducer
});

export default rootReducer;
