export const SET_INPUT = "SET_INPUT";
export const setInput = (value, fieldname) => ({
  type: SET_INPUT,
  value,
  fieldname
});