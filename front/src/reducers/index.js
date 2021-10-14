import { combineReducers } from "redux";

import wikisReducer from "./wikis";
import userReducer from "./user";
import errorReducer from "./error";
import blocksReducer from "./blocks";
import notesReducer from "./notes"
import campaignsReducer from "./campaigns"

const rootReducer = combineReducers({
  wikis: wikisReducer,
  user: userReducer,
  error: errorReducer,
  blocks: blocksReducer,
  notes: notesReducer,
  campaigns: campaignsReducer
});

export default rootReducer;
