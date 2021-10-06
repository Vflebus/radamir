import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "../reducers";
import wikisMiddleware from "../middlewares/wikis";
import userMiddleware from "../middlewares/user";

const middlewares = [wikisMiddleware, userMiddleware];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
