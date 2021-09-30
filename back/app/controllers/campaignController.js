const Campaign = require('../models/campaign');

const campaignController = {
    
    getAllCampaigns: async (_, response) => {
        try {
            const campaigns = await Campaign.getAllCampaigns();
			response.json(campaigns);
        } catch (error) {
			console.error(error);
			response.status(500).json(error.message);
		}
    },

    getOneCampaign: async (request, response) => {
        try {
            const campaign = await Campaign.getOneCampaign(request.params.campaign_name); 
			response.json(campaign);
        } catch (error) {
			console.error(error);
			response.status(500).json(error.message);
		}
    },

    save: async (request, response) => {
        try {
            const campaign = new Campaign(request.body);
            await Campaign.addCampaign();
            response.status(request.body.id ? 204 : 201).json(campaign);
        } catch (error) {
            console.error(error);	
			response.status(500).json(error.message);
        }
    },

    delete: async (request, response) => {
        try {
			const campaign = new Campaign(request.body);
			await Campaign.deleteCampaign();
			response.status(request.body.id ? 204 : 200).json(campaign);
		} catch (error) {
            console.error(error);
			response.status(500).json(error.message);
		}
    },
}

module.exports = campaignController;

