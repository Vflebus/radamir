import {
  SAVE_CAMPAIGNS,
  SET_CAMPAIGN_INPUT
} from "../actions/campaigns";
import { LOGOUT } from "../actions/user";

const initialState = {
  loading: true,
  list: [],
  campaign_name: "",
  description: ""
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CAMPAIGNS:
      return {
        ...state,
        list: action.campaigns,
        loading: false
      };

    case SET_CAMPAIGN_INPUT:
      return {
        ...state,
        [action.fieldname]: action.value
      };

    case LOGOUT:
      return {
        ...state,
        list: []
      };

    default:
      return state;
  }
};

export default reducer;