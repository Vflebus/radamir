import { 
  SET_INPUT,
  SIGN_UP,
  CONNECT_USER,
  LOGOUT
} from "../actions/user";

const initialState = {
  logged: false,
  loggedUser: {},
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

    case SIGN_UP:
      return {
        ...state,
        password: "",
        passwordConfirm: ""
      };

    case CONNECT_USER:
      return {
        ...state,
        logged: true,
        loggedUser: {
          username: action.data.username,
          email: action.data.email,
          id: action.data.id,
          is_admin: action.data.is_admin
        },
        username: "",
        email: "",
        password: ""
      };

    case LOGOUT:
      return {
        ...state,
        logged: false,
        loggedUser: {}
      };

    default:
      return state;
  }
};

export default reducer;