export const CREATE_NOTE = "CREATE_NOTE";
export const createNote = (campaign_id) => ({
  type: CREATE_NOTE,
  campaign_id
});

export const SET_TITLE = "SET_TITLE";
export const setTitle = (value) => ({
  type: SET_TITLE,
  value
});

export const SET_TYPE = "SET_TYPE";
export const setType = (value) => ({
  type: SET_TYPE,
  value
});

export const SET_CONTENT = "SET_CONTENT";
export const setContent = (value) => ({
    type: SET_CONTENT,
    value
});

export const SET_IMAGE_URL = "SET_IMAGE_URL"
export const setImageUrl = (value) => ({
  type: SET_IMAGE_URL,
  value
})

export const FETCH_NOTES = "FETCH_NOTES";
export const fetchNotes = (campaign_id, user_id) => ({
  type: FETCH_NOTES,
  campaign_id,
  user_id
});

export const SAVE_NOTES = "SAVE_NOTES";
export const saveNotes = (publicsData, myPublicsData, myPrivatesData) => ({
  type: SAVE_NOTES,
  publicsData,
  myPublicsData,
  myPrivatesData
});

export const UPDATE_NOTE = "UPDATE_NOTE";
export const updateNote = (note_id, campaign_id) => ({
  type: UPDATE_NOTE,
  note_id,
  campaign_id
})

export const SET_LOADING = "SET_LOADING";
export const setLoading = () => ({
  type: SET_LOADING
})

export const CLEAN_NOTES = "CLEAN_NOTES";
export const cleanNotes = () => ({
  type: CLEAN_NOTES
})

export const DELETE_NOTE = "DELETE_NOTE";
export const deleteNote = (note_id, campaign_id, user_id) => ({
  type: DELETE_NOTE,
  note_id,
  campaign_id,
  user_id
})