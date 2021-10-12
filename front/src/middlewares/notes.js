import radamirAPI from "../apis/radamirAPI";
import {
    CREATE_NOTE,
    FETCH_NOTES,
    setTitle,
    setType,
    setContent,
    UPDATE_NOTE
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

        case UPDATE_NOTE:
            try {
              const { title, content, type } = store.getState().notes;
              const is_private = (type==="privee");
              const usedId = store.getState().user.loggedUser.id;
        
              await radamirAPI.patch(`/wiki/${action.id}`, {
                title,
                content,
                is_private
              });
        
              store.dispatch(setTitle(""));
              store.dispatch(setContent(""));
              store.dispatch(setType("publique"));
            //   store.dispatch(fetchWikis());
            } catch (err) {
              console.error(err);
            }
            next(action);
            break;

        case FETCH_NOTES:
          try {            
            const userId = store.getState().user.loggedUser.id;
            const campaignId = 1;
            const myPublicNotes = await radamirAPI.get(`/player-public-notes/${campaignId}/${userId}`).data;
            const myPrivateNotes = await radamirAPI.get(`/private-notes/${campaignId}/${userId}`).data;
            const publicNotes = await radamirAPI.get(`/public-notes/${campaignId}/${userId}`).data;
            const res = {myPublicNotes, myPrivateNotes, publicNotes};

            // store.dispatch


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
