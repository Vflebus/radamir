const Block = require("../models/block");

const blockController = {
  save: async (request, response) => {
    try {
      const data = { ...request.body, ...request.params };
      const block = new Block(data);
      await block.save();
      response.json(block);
    } catch (error) {
      console.error(error);
      response.status(500).json(error.message);
    }
  },

  delete: async (request, response) => {
    try {
      const block = new Block(request.params);
      const deletedBlock = await block.delete();
      response.json(deletedBlock);
    } catch (error) {
      console.error(error);
      response.status(500).json(error.message);
    }
  },
};

module.exports = blockController;