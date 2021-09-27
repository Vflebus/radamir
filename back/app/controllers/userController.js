const User = require('../models/user');

const userController = {

    findUser: async (request, response) => {
        try {
            const userProfile = await Profile.findByUserName(request.params.username);
			response.json(userProfile);
        } catch (error) {
			console.error(error);
			response.status(500).json(error.message);
		}
    }
}

module.exports = userController;