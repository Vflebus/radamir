import { CLEAN_NOTES } from "../actions/notes";
import { SET_LOADING } from "../actions/notes";
import {
    CREATE_NOTE,
    SET_TITLE,
    SET_CONTENT,
    SET_TYPE,
    SAVE_NOTES,
    SET_IMAGE_URL
  } from "../actions/notes";
  
  const initialState = {
    list: {},
    title: "",
    content: "",
    image_url: "",
    type: "publique",
    loading: true
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

        case SET_IMAGE_URL:
            return {
                ...state,
                image_url: action.value
            }    

        case CREATE_NOTE: 
            return {
                ...state,
                list: {}
            }

        case SAVE_NOTES:
            return {
              list: {
                myPublics: action.myPublicsData,
                myPrivates: action.myPrivatesData,
                publics: action.publicsData,
              },
              title: "",
              content: "",
              image_url: "",
              type: "publique",
              loading: false,
            }

        case SET_LOADING:
            return {
              ...state,
              loading: true
            } 

        case CLEAN_NOTES:
            return {
              list: {},
              title: "",
              content:"",
              image_url: "",
              type: "publique",
              loading: true
            }

      default:
        return state;
    }
  };
  
  export default reducer;