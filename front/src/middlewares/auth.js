import { SIGN_UP, LOGIN } from "../actions/user";

const authMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case SIGN_UP:
      // TODO:
      break;

    case LOGIN:
      // TODO:
      break;

    default:
      next(action);
      break;
  }
};

export default authMiddleware;