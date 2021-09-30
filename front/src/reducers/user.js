import { SET_INPUT } from "../actions/user";

const initialState = {
  logged: false,
  username: "",
  email: "",
  password: "",
  passwordConfirm: ""
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        [action.fieldname]: action.value
      };

    default:
      return state;
  }
};

export default reducer;