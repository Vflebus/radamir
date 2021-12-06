import radamirAPI from "../apis/radamirAPI";
import {
  FETCH_CAMPAIGNS,
  CREATE_CAMPAIGN,
  DELETE_CAMPAIGN,
  UPDATE_CAMPAIGN,
  setCampaignLoading,
  saveCampaigns,
  fetchCampaigns
} from "../actions/campaigns";
import { clearError, setError } from "../actions/error";

const campaignsMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_CAMPAIGNS:
      try {
        console.log(`fetching with user id: ${action.user_id}`)
        const res = await radamirAPI.get("/campaigns", {
          params: {
            user_id: action.user_id
          }
        });

        const userCampaigns = res.data;
        console.log(userCampaigns);

        store.dispatch(saveCampaigns(userCampaigns));
      } catch (err) {
        console.error(err);
      }
      next(action);
      break;

    case CREATE_CAMPAIGN:
      try {
        store.dispatch(setCampaignLoading());
        store.dispatch(clearError());
        const { campaign_name, description } = store.getState().campaigns;

        if (!campaign_name || !description) throw new Error("Veuillez renseigner des informations");

        await radamirAPI.post("/campaigns", {
          user_id: action.id,
          campaign_name,
          description
        });
        
        store.dispatch(fetchCampaigns(action.id));
      } catch (err) {
        console.error(err);
        store.dispatch(setError(err.message));
      }
      next(action);
      break;

    case UPDATE_CAMPAIGN:
      try {
        store.dispatch(clearError());
        const { campaign_name, description } = store.getState().campaigns;

        if (!campaign_name || !description) throw new Error("Veuillez renseigner des informations");

        await radamirAPI.patch(`/campaigns/${action.campaignId}`, {
          campaign_name,
          description
        });

        store.dispatch(fetchCampaigns(action.userId));
      } catch (err) {
        console.error(err);
        store.dispatch(setError(err.message));
      }
      next(action);
      break;

    case DELETE_CAMPAIGN:
      try {
        await radamirAPI.delete(`/campaigns/${action.campaignId}`);

        store.dispatch(fetchCampaigns(action.userId));
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