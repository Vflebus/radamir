import { SAVE_WIKIS } from "../actions/wikis";

const initialState = {
  regions: [],
  others: [],
  loading: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_WIKIS:
      return {
        ...state,
        regions: action.wikis.filter(({ type }) => type === "region"),
        others: action.wikis.filter(({ type }) => type === "other"),
        loading: false
      }

    default:
      return state;
  }
};

export default reducer;
