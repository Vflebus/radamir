import { SET_INPUT, CONNECT_USER, LOGOUT } from "../actions/user";

const initialState = {
  logged: false,
  username: "",
  email: "",
  password: "",
  passwordConfirm: "",
  is_admin: false,
  id: null
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
        logged: true,
        username: action.data.username,
        email: action.data.email,
        id: action.data.id,
        password: "",
      };

    case LOGOUT:
      return {
        ...state,
        logged: false,
        username: "",
        email: "",
        id: null
      };

    default:
      return state;
  }
};

export default reducer;