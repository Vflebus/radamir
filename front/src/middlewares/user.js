import radamirAPI from "../apis/radamirAPI";
import {
  SIGN_UP,
  LOGIN,
  UPDATE_USER,
  DELETE_USER,
  CHECK_CONNECTION,
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
          email: email.toLowerCase(),
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
        // <-- json-server login
        // const emailInput = store.getState().user.email;
        // const passwordInput = store.getState().user.password;

        // const res = await radamirAPI.get("/user");
        // json-server login -->

        const res = await radamirAPI.post("/signin", {
          email: email.toLowerCase(),
          password
        });
        
        // <-- json-server login
        // const user = res.data.find(({ email, password }) => (emailInput === email && passwordInput === password));
        // json-server login -->

        // Persistent connection
        const timeToLive = 3 * 60 * 60 * 1000;

        const storedUser = {
          id: res.data.id,
          login: res.data.email,
          expiry: new Date().getTime() + timeToLive
        };

        localStorage.setItem("user", JSON.stringify(storedUser));

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
          email : (email ? email.toLowerCase() : loggedEmail)
        });

        const storedUserStr = localStorage.getItem("user");
        const storedUser = JSON.parse(storedUserStr);

        localStorage.setItem("user", JSON.stringify({
          ...storedUser,
          login: res.data.email
        }));

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

        localStorage.clear();

        store.dispatch(logout());
      } catch (err) {
        console.log(err);
      }
      next(action);
      break;

    case CHECK_CONNECTION:
      try {
        const storedUserStr = localStorage.getItem("user");

        if (!storedUserStr) {
          next(action);
          break;
        }

        const { id, login, expiry } = JSON.parse(storedUserStr);
        const now = new Date();

        if (now.getTime() > expiry) {
          localStorage.clear();
          next(action);
          break;
        }

        const res = await radamirAPI.get(`/profile/${id}`);

        if (res.data.email !== login) {
          localStorage.clear();
          next(action);
          break;
        }

        store.dispatch(fetchCampaigns(id));
        store.dispatch(connectUser(res.data));
      } catch (err) {
        console.error(err);
      }
      next(action);
      break;

    default:
      next(action);
      break;
  }
};

export default userMiddleware;