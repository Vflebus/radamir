import { SET_BLOCK_TITLE, SET_BLOCK_CONTENT  } from "../actions/blocks";

const initialState = {
  title: "",
  content: ""
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_BLOCK_TITLE:
      return {
        ...state,
        title: action.value
      };

    case SET_BLOCK_CONTENT:
      return {
        ...state,
        content: action.value
      }
      
    default:
      return state;
  }
};

export default reducer;