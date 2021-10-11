export const SET_BLOCK_TITLE = "SET_BLOCK_TITLE";
export const setBlockTitle = (value) => ({
  type: SET_BLOCK_TITLE,
  value
});

export const SET_BLOCK_CONTENT = "SET_BLOCK_CONTENT";
export const setBlockContent = (value) => ({
  type: SET_BLOCK_CONTENT,
  value
});

export const CREATE_BLOCK = "CREATE_BLOCK";
export const createBlock = (id, data) => ({
  type: CREATE_BLOCK,
  id,
  data
});

export const UPDATE_BLOCK = "UPDATE_BLOCK";
export const updateBlock = (id) => ({
  type: UPDATE_BLOCK,
  id
});

export const DELETE_BLOCK = "DELETE_BLOCK";
export const deleteBlock = (id) => ({
  type: DELETE_BLOCK,
  id
});