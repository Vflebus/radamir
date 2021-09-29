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

    addCampaign: async (request, response) => {
        try {
            const campaign = new Campaign(request.body);
            await Campaign.addCampaign();
            response.status(request.body.id ? 204 : 201).json(campaign);
        } catch (error) {
            console.error(error);	
			response.status(500).json(error.message);
        }
    },

    deleteCampaign: async (request, response) => {
        try {
			const campaign = new Campaign(request.body);
			await Campaign.deleteCampaign();
			response.status(request.body.id ? 204 : 200).json(campaign);
		} catch (error) {
            console.error(error);
			response.status(500).json(error.message);
		}
    },

    addPlayer: async (request, response) => {
        try {
            const campaign = new Campaign(request.body);
            await Campaign.addPlayer();
            // response.status(request.body.id ? 204 : 201).json(campaign);    //les codes http peuvent changer ici ?
        } catch (error) {
            console.error(error);	
			response.status(500).json(error.message);
        }
    },

    deletePlayer: async (request, response) => {
        try {
			const campaign = new Campaign(request.body);
			await Campaign.deletePlayer();
			response.status(request.body.id ? 204 : 200).json(campaign);
		} catch (error) {
            console.error(error);
			response.status(500).json(error.message);
		}
    },

    addNote: async (request, response) => {
        try {
            const campaign = new Campaign(request.body);
            await Campaign.addNote();
            response.status(request.body.id ? 204 : 201).json(campaign);
        } catch (error) {
            console.error(error);	
			response.status(500).json(error.message);
        }
    },

    /* editNote: async (request, response) => {
        a faire
    }, */  

    deleteNote: async (request, response) => {
        try {
			const campaign = new Campaign(request.body);
			await Campaign.deleteNote();
			response.status(request.body.id ? 204 : 200).json(campaign);
		} catch (error) {
            console.error(error);
			response.status(500).json(error.message);
		}
    }
}

module.exports = campaignController;

