export const FETCH_CAMPAIGNS = "FETCH_CAMPAIGNS";
export const fetchCampaigns = (id) => ({
  type: FETCH_CAMPAIGNS,
  id
});

export const SAVE_CAMPAIGNS = "SAVE_CAMPAIGNS";
export const saveCampaigns = (campaigns) => ({
  type: SAVE_CAMPAIGNS,
  campaigns
});