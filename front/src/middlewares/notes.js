import radamirAPI from "../apis/radamirAPI";
import {
    FETCH_NOTES,
    CREATE_NOTE,
    saveNotes,
    setTitle,
    setType,
    setContent,
    UPDATE_NOTE,
    fetchNotes
  } from "../actions/notes";
  import { setError, clearError } from "../actions/error";

const notesMiddleware = (store) => (next) => async (action) => {
    switch (action.type) {

        case FETCH_NOTES:
            try {
                const publics = await radamirAPI.get(`/public-notes/1/${action.user_id}`);
                const publicsData = publics.data;
                const myPublics = await radamirAPI.get(`/player-public-notes/1/${action.user_id}`);
                const myPublicsData = myPublics.data;
                const myPrivates = await radamirAPI.get(`/private-notes/1/${action.user_id}`);
                const myPrivatesData = myPrivates.data;

                store.dispatch(saveNotes(publicsData, myPublicsData, myPrivatesData));

            } catch (err) {
                console.error(err);
            }
            next(action);
            break;

        case CREATE_NOTE:
            try {
                console.log('beginning create');
                store.dispatch(clearError());
                const { title, type, content } = store.getState().notes;
                const { id } = store.getState().user.loggedUser;
                const is_private = (type==="privee");
                const campaign_id = action.campaign_id
                console.log(`title: ${title}, content: ${content}, is_private: ${is_private}, campaign_id: ${campaign_id}, id: ${id}`)

                await radamirAPI.post("/note", {
                    title,
                    content,
                    is_private,
                    campaign_id,
                    user_id: id
                })

                store.dispatch(setTitle(""));
                store.dispatch(setType("publique"));
                store.dispatch(fetchNotes(campaign_id, id));
                console.log('dispatching fetch');
                
            } catch (err) {
                console.log(err);
                store.dispatch(setError(err.message));
            };
            next(action);
            break;

        case UPDATE_NOTE:
            try {
                const { title, type, content } = store.getState().notes;
                console.log(`update with title: ${title} type: ${type} content: ${content}`);
            } catch (err) {
                console.log(err);
            };
            next(action);
            break;

        default:
            next(action);
            break;
    }
};

export default notesMiddleware;
