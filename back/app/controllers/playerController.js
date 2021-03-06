const Player = require('../models/player');

const playerController = {
    findParty: async (request, response) => {
        try {
            const party = await Player.findParty(request.params.campaign_name);
            response.json(party);
        } catch (error) {
            console.error(error);	
			response.status(500).json(error.message);
        }
    },

    save: async (request, response) => {
        try {
            const player = new Player(request.body);
            await Player.save();
            response.status(request.body.id ? 204 : 201).json(player); 
        } catch (error) {
            console.error(error);	
			response.status(500).json(error.message);
        }
    },

    delete: async (request, response) => {
        try {
			const player = new Player(request.body);
			await Player.delete();
			response.status(request.body.id ? 204 : 200).json(player);
		} catch (error) {
            console.error(error);
			response.status(500).json(error.message);
		}
    },
}

module.exports = playerController;
