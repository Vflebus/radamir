import { SET_ERROR, CLEAR_ERROR } from "../actions/error";

const initialState = {
  message: null
};

const reducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_ERROR:
      return {
        ...state,
        message: action.message
      };

    case CLEAR_ERROR:
      return {
        ...state,
        message: null
      };

    default:
      return state;
  }
};

export default reducer;