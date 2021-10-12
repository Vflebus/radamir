import radamirAPI from "../apis/radamirAPI";
import { FETCH_CAMPAIGNS, saveCampaigns } from "../actions/campaigns";

const campaignsMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_CAMPAIGNS:
      try {
        const res = await radamirAPI.get("/campaign");

        const userCampaigns = res.data.filter(({ userId }) => userId === action.id);

        store.dispatch(saveCampaigns(userCampaigns));
      } catch (err) {
        console.error(err);
      }
      next(action);
      break;

    default:
      next(action);
      break;
  }
};

export default campaignsMiddleware;