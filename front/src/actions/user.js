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

export const UPDATE_USER = "UPDATE_USER";
export const updateUser = () => ({
  type: UPDATE_USER
});

export const DELETE_USER = "DELETE_USER";
export const deleteUser = () => ({
  type: DELETE_USER
});

export const CHECK_CONNECTION = "CHECK_CONNECTION";
export const checkConnection = () => ({
  type: CHECK_CONNECTION
});