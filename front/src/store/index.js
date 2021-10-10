import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "../reducers";
import wikisMiddleware from "../middlewares/wikis";
import userMiddleware from "../middlewares/user";
import blocksMiddleware from "../middlewares/blocks";

const middlewares = [wikisMiddleware, userMiddleware, blocksMiddleware];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
