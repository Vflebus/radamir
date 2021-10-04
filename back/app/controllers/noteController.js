const Note = require("../models/note");

const noteController = {
  //get public notes that are related to a campaign
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
  // /campaigns/:campaign_name/notes

  // SELECT * FROM note WHERE campaign_id = $1 AND is_private = false;
  // SELECT * FROM note WHERE campaign_id = $1 AND user_id = $2 AND is_private = true;

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

  /* update: async (request, response) => {
        a faire ? save s'occupe de l'update aussi du coup ?
    }, */

  delete: async (request, response) => {
    try {
      const note = new Note(request.body);
      await Note.delete();
      response.status(request.body.id ? 204 : 200).json(note);
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
