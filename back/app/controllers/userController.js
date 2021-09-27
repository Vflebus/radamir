const User = require('../models/user');
const jwt = require('../services/jwt')

const userController = {

    findUser: async (request, response) => {
        try {
            const user = await User.findUser(request.params.username);
			response.json(user);
        } catch (error) {
			console.error(error);
			response.status(500).json(error.message);
		}
    },

    save: async (request, response) => {
        try {
            const user = new User(request.body);
            await user.save();
            response.status(request.body.id ? 204 : 201).json(user);
        } catch (error) {
            console.error(error);	
			response.status(500).json(error.message);
        }
    },

    update: async (request, response) => {
        try {
            const user = new User(
                request.params.username, 
                request.params.email,
                request.params.password, 
                requestrequest.body
                );
            await User.update();
			response.status(request.body.id ? 204 : 202).json(user);
        } catch (error) {
			console.error(error);
			response.status(500).json(error.message);
		}
    },

	delete: async (request, response) => {
		try {
			const user = new User(request.body);
			await User.delete();
			response.status(request.body.id ? 204 : 200).json(user);
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