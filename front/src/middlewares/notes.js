import radamirAPI from "../apis/radamirAPI";
import {
    FETCH_NOTES,
    CREATE_NOTE,
    UPDATE_NOTE,
    saveNotes,
    setTitle,
    setType,
    fetchNotes,
    setLoading,
    cleanNotes,
    DELETE_NOTE,
    setImageUrl,
  } from "../actions/notes";
  import { setError, clearError } from "../actions/error";

const notesMiddleware = (store) => (next) => async (action) => {
    switch (action.type) {

        case FETCH_NOTES:
            try {
                store.dispatch(cleanNotes());
                const publics = await radamirAPI.get(`/public-notes/${action.campaign_id}/${action.user_id}`);
                const publicsData = publics.data;
                const myPublics = await radamirAPI.get(`/player-public-notes/${action.campaign_id}/${action.user_id}`);
                const myPublicsData = myPublics.data;
                const myPrivates = await radamirAPI.get(`/private-notes/${action.campaign_id}/${action.user_id}`);
                const myPrivatesData = myPrivates.data;

                store.dispatch(saveNotes(publicsData, myPublicsData, myPrivatesData));

            } catch (err) {
                console.error(err);
            }
            next(action);
            break;

        case CREATE_NOTE:
            try {
                store.dispatch(clearError());
                const { title, type, content, image_url } = store.getState().notes;
                const { id } = store.getState().user.loggedUser;
                const is_private = (type==="privee");
                const campaign_id = action.campaign_id

                await radamirAPI.post("/note", {
                    title,
                    content,
                    is_private,
                    campaign_id,
                    user_id: id,
                    image_url
                })

                store.dispatch(setTitle(""));
                store.dispatch(setType("publique"));
                store.dispatch(setImageUrl(""));
                store.dispatch(setLoading());
                store.dispatch(fetchNotes(campaign_id, id));
                
            } catch (err) {
                console.log(err);
                store.dispatch(setError(err.message));
            };
            next(action);
            break;

        case UPDATE_NOTE:
            try {
                const { title, type, content, image_url } = store.getState().notes;
                const is_private = (type==="privee");
                console.log(`updating with : ${{
                    title,
                    content,
                    is_private,
                    image_url
                }}}`);
                await radamirAPI.patch(`/note/${action.note_id}`, {
                    title,
                    content,
                    is_private,
                    image_url
                });
                const { id } = store.getState().user.loggedUser;
                store.dispatch(fetchNotes(action.campaign_id, id));
            } catch (err) {
                console.log(err);
            };
            next(action);
            break;

        case DELETE_NOTE:
            try {
                await radamirAPI.delete(`/note/${action.note_id}`)
                store.dispatch(fetchNotes(action.campaign_id, action.user_id));
            } catch (err) {
                console.error(err);
            };
            next(action);
            break;

        default:
            next(action);
            break;
    }
};

export default notesMiddleware;
