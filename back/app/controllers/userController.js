const User = require('../models/user');
const jwt = require('../services/jwt');
const noteController = require('./noteController');

const userController = {

    findUser: async (request, response) => {
        try {
            const user = await User.findUser(request.params.id);
			response.json(user);
        } catch (error) {
			console.error(error);
			response.status(500).json(error.message);
		}
    },

    save: async (request, response) => {
        try {

            const data = {...request.body, ...request.params}
            const user = new User(data);
            await user.save();
            response.status(200).json(user);
        } catch (error) {
            console.error(error);	
			response.status(500).json(error.message);
        }
    },

	delete: async (request, response) => {
		try {
			const user = new User(request.params);
            const result = await user.delete();
			response.status(request.params ? 204 : 200).json(result);
		} catch (error) {
            console.error(error);
			response.status(500).json(error.message);
		}
	},

    login: async (request, response) => {
        try {
            const user = await new User(request.body).login();
            response.setHeader('Authorization', jwt.generateToken(user.id));
            response.status(200).json(user);
        } catch (error) {
            console.log(error);
            response.status(500).json(error.message);
        }
    },

    getInfos: (request, response) => {
        try {
            const infos = {
                message: 'Message de vérif obtenu de la requète'
            }
            response.setHeader('Authorization', jwt.generateToken(requestatus.userId));
            response.status(200).json(infos);
        } catch (error) {
            console.log(error);
            response.status(500).json(error.message);
        }
    }
}


module.exports = userController;