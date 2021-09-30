import { combineReducers } from "redux";

import wikisReducer from "./wikis";
import userReducer from "./user";

const rootReducer = combineReducers({
  wikis: wikisReducer,
  user: userReducer
});

export default rootReducer;
