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
import { fetchCampaigns } from "../actions/campaigns";
import history from "../history";

const userMiddleware = (store) => (next) => async (action) => {  
  switch (action.type) {
    case SIGN_UP:
      try {
        store.dispatch(clearError());

        const { username, email, password, passwordConfirm } = store.getState().user;
  
        if (password !== passwordConfirm) throw new Error("Veuillez entrer le même mot de passe");
  
        await radamirAPI.post("/signup", {
          username,
          email,
          password
        });

        store.dispatch(setInput("", "username"));
        store.dispatch(setInput("", "email"));
        store.dispatch(setInput("", "password"));
        store.dispatch(setInput("", "passwordConfirm"));

        history.push("/");
      } catch (err) {
        store.dispatch(setInput("", "password"));
        store.dispatch(setInput("", "passwordConfirm"));
        store.dispatch(setError(err.message));
      }
      break;

    case LOGIN:
      try {
        store.dispatch(clearError());

        const { email, password } = store.getState().user;
        // json-server login
        // const emailInput = store.getState().user.email;
        // const passwordInput = store.getState().user.password;

        // const res = await radamirAPI.get("/user");
        // /json-server login

        const res = await radamirAPI.post("/signin", { email, password });
        // json-server login
        // const user = res.data.find(({ email, password }) => (emailInput === email && passwordInput === password));
        // /json-server login

        // change parameter with real API
        store.dispatch(fetchCampaigns(res.data.id));
        store.dispatch(connectUser(res.data));
      } catch (err) {
        store.dispatch(setInput("", "password"));
        store.dispatch(setError("Une erreur est survenue"));
      }
      next(action);
      break;

    case UPDATE_USER:
      try {
        const { id } = store.getState().user.loggedUser;
        const loggedUsername = store.getState().user.loggedUser.username;
        const loggedEmail = store.getState().user.loggedUser.email;
        const { username, email } = store.getState().user;

        const res = await radamirAPI.patch(`/profile/${id}`, {
          username: (username ? username : loggedUsername),
          email : (email ? email : loggedEmail)
        });

        store.dispatch(connectUser(res.data));
      } catch (err) {
        console.log(err);
      }
      next(action);
      break;

    case DELETE_USER:
      try {
        const { id } = store.getState().user.loggedUser;

        await radamirAPI.delete(`/profile/${id}`);

        store.dispatch(logout());
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