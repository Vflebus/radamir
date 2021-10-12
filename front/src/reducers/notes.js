import {
    CREATE_NOTE,
    SET_TITLE,
    SET_CONTENT,
    SET_TYPE
  } from "../actions/notes";
  
  const initialState = {
    list: {},
    title: "",
    content:"",
    type: "publique"
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        
      case SET_TITLE:
          return {
              ...state,
              title: action.value
          }
        
        case SET_TYPE:
            return {
                ...state,
                type: action.value
            }

        case SET_CONTENT:
            return {
                ...state,
                content: action.value
            }

        case CREATE_NOTE: 
            return {
                ...state,
                list: []
            }

      default:
        return state;
    }
  };
  
  export default reducer;