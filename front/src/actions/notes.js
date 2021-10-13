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