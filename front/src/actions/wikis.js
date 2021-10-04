export const FETCH_WIKIS = "FETCH_WIKIS";
export const fetchWikis = () => ({
  type: FETCH_WIKIS
});

export const SAVE_WIKIS = "SAVE_WIKIS";
export const saveWikis = (wikis) => ({
  type: SAVE_WIKIS,
  wikis
});