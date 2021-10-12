import radamirAPI from "../apis/radamirAPI";
import {
    CREATE_NOTE,
    setTitle,
    setType
  } from "../actions/notes";
  import { setError, clearError } from "../actions/error";

const notesMiddleware = (store) => (next) => async (action) => {
    switch (action.type) {

        case CREATE_NOTE:
            try {
                store.dispatch(clearError());
                const { title, type, content } = store.getState().notes;
                const { id } = store.getState().user.loggedUser;
                const is_private = (type==="privee");

                await radamirAPI.post("/notes", {
                    title,
                    content,
                    is_private,
                    // campaign_id,
                    user_id: id
                })

                store.dispatch(setTitle(""));
                store.dispatch(setType("publique"));
                
            } catch (err) {
                console.log(err);
                store.dispatch(setError(err.message));
            }
            next(action);
            break;

        default:
            next(action);
            break;
    }
};

export default notesMiddleware;
