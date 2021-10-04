import { SET_INPUT, CONNECT_USER, LOGOUT } from "../actions/user";

const initialState = {
  logged: true,
  username: "Blistoufe",
  email: "blistoufe@gmail.com",
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

    case CONNECT_USER:
      return {
        ...state,
        username: action.data,
        logged: true,
        email: "",
        password: "",
        passwordConfirm: ""
      };

    case LOGOUT:
      return {
        ...state,
        logged: false,
        username: null,
        email: null
      }

    default:
      return state;
  }
};

export default reducer;