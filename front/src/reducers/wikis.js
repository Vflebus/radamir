import { SAVE_WIKIS } from "../actions/wikis";

const initialState = {
  list: [],
  loading: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_WIKIS:
      return {
        ...state,
        list: action.wikis,
        loading: false
      }

    default:
      return state;
  }
};

export default reducer;
