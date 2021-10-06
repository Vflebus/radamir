import radamirAPI from "../apis/radamirAPI";
import {
  SIGN_UP,
  LOGIN,
  UPDATE_USER,
  DELETE_USER,
  connectUser,
  setInput,
  logout
} from "../actions/user";
import { setError, clearError } from "../actions/error";
import history from "../history";

const userMiddleware = (store) => (next) => async (action) => {  
  switch (action.type) {
    case SIGN_UP:
      try {
        store.dispatch(clearError());

        const { username, email, password, passwordConfirm } = store.getState().user;
  
        if (password !== passwordConfirm) throw Error("Mots de passe différents");
  
        await radamirAPI.post("/user", {
          username,
          email,
          password,
          isAdmin: false
        });

        store.dispatch(setInput("", "username"));
        store.dispatch(setInput("", "email"));
        store.dispatch(setInput("", "password"));
        store.dispatch(setInput("", "passwordConfirm"));

        history.push("/");
        // TODO:
      } catch (err) {
        store.dispatch(setInput("", "password"));
        store.dispatch(setInput("", "passwordConfirm"));
        store.dispatch(setError(err.message));
      }
      break;

    case LOGIN:
      try {
        store.dispatch(clearError());

        // Placeholder
        const userEmail = store.getState().user.email;
        const userPassword = store.getState().user.password;

        const res = await radamirAPI.get("/user");

        const foundUser = res.data.find(({ email, password }) => {
          return email === userEmail && password === userPassword
        });

        if (!foundUser) throw Error("Adresse e-mail ou mot de passe inconnu");

        store.dispatch(connectUser(foundUser));

        // TODO: update following lines with correct api

        // const res = await radamirAPI.post("/signin", { email, password });

        // store.dispatch(connectUser(res.data));
      } catch (err) {
        store.dispatch(setInput("", "password"));
        store.dispatch(setError(err.message));
      }
      next(action);
      break;

    case UPDATE_USER:
      try {
        const { id } = store.getState().user;
        const { username, email } = store.getState().user;

        const res = await radamirAPI.patch(`/user/${id}`, {
          username,
          email
        }, {
          headers: { "Content-Type": "application/json" }
        });
       
        store.dispatch(connectUser(res.data));
      } catch (err) {
        console.log(err);
      }
      next(action);
      break;

    case DELETE_USER:
      try {
        const { id } = store.getState().user;

        await radamirAPI.delete(`/user/${id}`);

        store.dispatch(logout());

        history.push("/");
      } catch (err) {
        console.log(err);
      }
      next(action);
      break;

    default:
      next(action);
      break;
  }
};

export default userMiddleware;