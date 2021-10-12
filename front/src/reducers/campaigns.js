import { SAVE_CAMPAIGNS } from "../actions/campaigns";

const initialState = {
  list: [],
  campaign_name: "",
  description: ""
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CAMPAIGNS:
      return {
        ...state,
        list: action.campaigns
      }

    default:
      return state;
  }
};

export default reducer;