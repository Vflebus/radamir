export const FETCH_WIKIS = "FETCH_WIKIS";
export const fetchWikis = () => ({
  type: FETCH_WIKIS
});

export const SAVE_WIKIS = "SAVE_WIKIS";
export const saveWikis = (wikis) => ({
  type: SAVE_WIKIS,
  wikis
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

export const CREATE_WIKI = "CREATE_WIKI";
export const createWiki = (data) => ({
  type: CREATE_WIKI,
  data
});

export const UPDATE_WIKI = "UPDATE_WIKI";
export const updateWiki = (id) => ({
  type: UPDATE_WIKI,
  id
});

export const DELETE_WIKI = "DELETE_WIKI";
export const deleteWiki = (id) => ({
  type: DELETE_WIKI,
  id
});