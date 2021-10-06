const Note = require("../models/note");

const noteController = {
  getPlayerPublicNotes: async (request, response) => {
    try {
      const notes = await Note.getPlayerPublicNotes(request.params.campaign_id, request.params.user_id);
      response.json(notes);
    } catch (error) {
      console.error(error);
      response.status(500).json(error.message);
    }
  },

  getPublicNotes: async (request, response) => {
    try {
      const notes = await Note.getPublicNotes(request.params.campaign_id, request.params.user_id);
      response.json(notes);
    } catch (error) {
      console.error(error);
      response.status(500).json(error.message);
    }
  },

  getPrivateNotes: async (request, response) => {
    try {
      const notes = await Note.getPrivateNotes(request.params.campaign_id, request.params.user_id);
      response.json(notes);
    } catch (error) {
      console.error(error);
      response.status(500).json(error.message);
    }
  },

  save: async (request, response) => {
    try {
      const data = {...request.body, ...request.params};
      const note = new Note(data);
      await note.save();
      response.status(request.body.id ? 204 : 201).json(note);
    } catch (error) {
      console.error(error);
      response.status(500).json(error.message);
    }
  },

  delete: async (request, response) => {
    try {
			const note = new Note(request.params);
			const result = await note.delete();
			response.status(200).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).json(error.message);
    }
  },

  toggleIsPrivate: async (request, response) => {
    try {
      const note = new Note(request.body);
      await Note.makePrivate();
      response.status(request.body.id ? 204 : 202).json(note);
    } catch (error) {
			console.error(error);
			response.status(500).json(error.message);
		}
  }
};

module.exports = noteController;
