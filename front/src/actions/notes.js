export const CREATE_NOTE = "CREATE_NOTE";
export const createNote = () => ({
  type: CREATE_NOTE,
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
})