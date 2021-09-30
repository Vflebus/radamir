export const SET_INPUT = "SET_INPUT";
export const setInput = (value, fieldname) => ({
  type: SET_INPUT,
  value,
  fieldname
});

export const SIGN_UP = "SIGN_UP";
export const signUp = () => ({
  type: SIGN_UP
});

export const LOGIN = "LOGIN";
export const login = () => ({
  type: LOGIN
});

export const CONNECT_USER = "CONNECT_USER";
export const connectUser = (data) => ({
  type: CONNECT_USER,
  data
});

export const LOGOUT = "LOGOUT";
export const logout = () => ({
  type: LOGOUT
});