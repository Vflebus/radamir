const Wiki = require('../models/wiki');

const wikiController = {
	
	getAllWikis: async (_, response) => {
		try {
			const wikiPages = await Wiki.getAllWikis();
			response.json(wikiPages);
		} catch (error) {
			console.error(error);
			response.status(500).json(error.message);
		}
	}, 
	
	save: async (request, response) => {
		try {
			const wiki = new Wiki(request.body);
			await wiki.save();
			response.json(wiki);
		} catch (error) {
			console.error(error);
			response.status(500).json(error.message);
		}
	},

	getWikiById: async (request, response) => {
		try {
			const wiki = await Wiki.getWikiById(request.params.id);
			response.json(wiki);
		} catch (error) {
			console.error(error);
			response.status(500).json(error.message);
		}
	},

	// l'endroit concerné
	delete: async (request, response) => {
		try {
			const wiki = new Wiki(request.params.id);
			await wiki.delete();
			response.json(wiki);
		} catch (error) {
			console.error(error);
			response.status(500).json(error.message);
		}
	},
}

module.exports = wikiController;