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
			const data = {...request.body, ...request.params}
			const wiki = new Wiki(data);
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

	delete: async (request, response) => {
		try {
			const wiki = new Wiki(request.params);
			const result = await wiki.delete();
			response.json(result);
		} catch (error) {
			console.error(error);
			response.status(500).json(error.message);
		}
	},
}

module.exports = wikiController;