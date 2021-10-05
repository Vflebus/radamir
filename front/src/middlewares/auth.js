import radamirAPI from "../apis/radamirAPI";
import { SIGN_UP, LOGIN, connectUser, setInput } from "../actions/user";
import { setError, clearError } from "../actions/error";

const authMiddleware = (store) => (next) => async (action) => {  
  switch (action.type) {
    case SIGN_UP:
      // TODO:
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

    default:
      next(action);
      break;
  }
};

export default authMiddleware;