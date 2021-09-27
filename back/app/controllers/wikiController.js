const Wiki = require('../models/wiki');

const wikiController = {
	
	findAll: async (_, response) => {
		try {
			const wikiPages = await Wiki.findAll();
			response.json(wikiPages);
		} catch (error) {
			console.error(error);
			response.status(500).json(error.message);
		}
	}, 
	
	findByTitle: async (request, response) => {
		try {
			const wikiTitle = await Wiki.findByTitle(request.params.title);
			response.json(wikiTitle);
		} catch (error) {
			console.error(error);
			response.status(500).json(error.message);
		}
	},

	getBlocks: async (_, response) => {
		try {
			const blocks = await Wiki.getBlocks();
			response.json(blocks);	
		} catch (error) {
			console.error(error);
			response.status(500).json(error.message);
		}
	},

	save: async (request, response) => {
		try {
			const wiki = new Wiki(request.body);
			await wiki.save();			
			response.status(request.body.id ? 204 : 201).json(wiki);
		} catch (error) {
			console.error(error);	
			response.status(500).json(error.message);
		}
	},

	update: async (request, response) => {
		try {
			const wiki = new Wiki(request.body);
			await wiki.update();
			response.status(request.body.id ? 204 : 202).json(wiki);
		} catch (error) {
			console.error(error);
			response.status(500).json(error.message);
		}
	},

	delete: async (request, response) => {
		try {
			const wiki = new Wiki(request.body);
			await Wiki.delete();
			response.status(request.body.id ? 204 : 200).json(wiki);
		} catch (error) {
			console.error(error);
			response.status(500).json(error.message);
		}
	}
};

module.exports = wikiController;