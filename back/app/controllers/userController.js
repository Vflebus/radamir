const Profile = require('../models/profile');

const profileController = {

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

module.exports = profileController;