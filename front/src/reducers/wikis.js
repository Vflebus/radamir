import {
  SAVE_WIKIS,
  SET_TITLE,
  SET_TYPE
} from "../actions/wikis";

const initialState = {
  list: [],
  loading: true,
  title: "",
  type: "region",
  content: ""
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        title: action.value
      };

    case SET_TYPE:
      return {
        ...state,
        type: action.value
      };

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
