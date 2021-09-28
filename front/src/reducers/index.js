import { combineReducers } from "redux";

import wikisReducer from "./wikis";

const rootReducer = combineReducers({
  wikis: wikisReducer,
});

export default rootReducer;
