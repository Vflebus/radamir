const Campaign = require('../models/campaign');

const campaignController = {
    
    getAllCampaigns: async (request, response) => {
        try {
            console.log(`request params: ${request.query.user_id}`);
            const campaigns = await Campaign.getAllCampaigns(request.query.user_id);
			response.json(campaigns);
        } catch (error) {
			console.error(error);
			response.status(500).json(error.message);
		}
    },

    getOneCampaign: async (request, response) => {
        try {
            const campaign = await Campaign.getOneCampaign(request.params.id);
			response.json(campaign);
        } catch (error) {
			console.error(error);
			response.status(500).json(error.message);
		}
    },

    save: async (request, response) => {
        try {
            const data = {...request.body, ...request.params}
            const campaign = new Campaign(data);
            await campaign.save();
            response.json(campaign);
        } catch (error) {
            console.error(error);	
			response.status(500).json(error.message);
        }
    },

    delete: async (request, response) => {
        try {
			const campaign = new Campaign(request.params);
			const result = await campaign.delete();
			response.json(result);
		} catch (error) {
            console.error(error);
			response.status(500).json(error.message);
		}
    },
}

module.exports = campaignController;

