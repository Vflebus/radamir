import { SET_BLOCK_TITLE, SET_BLOCK_CONTENT, CREATE_BLOCK  } from "../actions/blocks";

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
      
    case CREATE_BLOCK:
      return {
        ...state,
        title: "",
        content: ""
      };
      
    default:
      return state;
  }
};

export default reducer;