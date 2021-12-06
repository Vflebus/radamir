export const FETCH_CAMPAIGNS = "FETCH_CAMPAIGNS";
export const fetchCampaigns = (user_id) => ({
  type: FETCH_CAMPAIGNS,
  user_id
});

export const SAVE_CAMPAIGNS = "SAVE_CAMPAIGNS";
export const saveCampaigns = (campaigns) => ({
  type: SAVE_CAMPAIGNS,
  campaigns
});

export const SET_CAMPAIGN_INPUT = "SET_CAMPAIGN_INPUT";
export const setCampaignInput = (fieldname, value) => ({
  type: SET_CAMPAIGN_INPUT,
  value,
  fieldname
});

export const CREATE_CAMPAIGN = "CREATE_CAMPAIGN";
export const createCampaign = (id) => ({
  type: CREATE_CAMPAIGN,
  id
});

export const UPDATE_CAMPAIGN = "UPDATE_CAMPAIGN";
export const updateCampaign = (userId, campaignId) => ({
  type: UPDATE_CAMPAIGN,
  userId,
  campaignId
});

export const DELETE_CAMPAIGN = "DELETE_CAMPAIGN";
export const deleteCampaign = (userId, campaignId) => ({
  type: DELETE_CAMPAIGN,
  userId,
  campaignId
});

export const SET_CAMPAIGN_LOADING = "SET_CAMPAIGN_LOADING";
export const setCampaignLoading = () => ({
  type: SET_CAMPAIGN_LOADING
});