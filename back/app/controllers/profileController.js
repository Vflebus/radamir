const Profile = require('../models/profile');

const profileController = {

    findUser: async (request, response) => {
        try {
            const 
        } catch (error) {
			console.error(error);
			response.status(500).json(error.message);
		}
    }
}

module.exports = profileController;