import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "../reducers";
import wikisMiddleware from "../middlewares/wikis";
import authMiddleware from "../middlewares/auth";

const middlewares = [wikisMiddleware, authMiddleware];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
