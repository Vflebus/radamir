const { Router, response } = require("express");

const wikiController = require("./controllers/wikiController"); 
const userController = require("./controllers/userController");
const campaignController = require("./controllers/campaignController");
const noteController = require("./controllers/noteController");
const playerController = require("./controllers/playerController");
const Player = require("./models/player");

const router = Router();

//#region GET

// GET /profile

/**
 * Responds with the id of the connected user
 * @route GET /profile
 * @group User
 * @summary Responds with the id of the connected user
 * @returns {int} 200 - An integer as id
 * @returns {string} 500 - An error message
 */
router.get("/profile", userController.findUser);

/**
 * Responds with all campaigns in database
 * @route GET /campaigns
 * @group Campaigns
 * @summary Responds with all campaigns in database
 * @returns {Array<Campaign>} 200 - An array of campaigns
 * @returns {string} 500 - An error message
 */
router.get("/campaigns", campaignController.getAllCampaigns);

/**
 * Responds with one campaign in database
 * @route GET /campaigns/{campaign_name}
 * @group Campaigns
 * @summary Responds with one campaign in database
 * @param {string} campaign_name - The name of the campaign to fetch
 * @returns {string} 200 - A single campaign identified by its name
 * @returns {string} 404 - An error message
 * @returns {string} 500 - An error message
 */
router.get(`/campaigns/:campaign_name`, campaignController.getOneCampaign);

/**
 * Responds with all informations from wiki in the database
 * @route GET /wiki
 * @group Wiki
 * @summary Responds with all informations from wiki in the database
 * @returns {Array<Wiki>} 200 - An array of wiki
 * @returns {string} 500 - An error message
 */
router.get(`/wiki`, wikiController.findAll);

/**
 * Responds with one wiki in database
 * @route GET /wiki/{title}
 * @group Wiki
 * @summary Responds with one wiki in database
 * @param {string} title - The title of the wiki to fetch
 * @returns {string} 200 - A single wiki identified by its title
 * @returns {string} 404 - An error message
 * @returns {string} 500 - An error message
 */
router.get(`/wiki/:slug`, wikiController.findByTitle);

//#endregion GET

//#region POST

/**
 * Add a new user in database
 * @route POST /signup
 * @group User
 * @summary Add a new user in database
 * @returns {User.model} 201 - The newly created user
 * @returns {User.model} 204 - The updated profile
 * @returns {string} 500 - An error message
 * @returns {string} 400 - A validation error message
 */
router.post('/signup', userController.save);

/**
 * Retrieve connection informations from a user
 * @route POST /signin
 * @group User
 * @summary Retrieve connection informations from a user
 * @returns {User.model} 200 - The user
 * @returns {string} 500 - An error message
 * @returns {string} 400 - A validation error message
 */
router.post('/signin', userController.login);

/**
 * Add a new campaign in database
 * @route POST /campaigns
 * @group Campaigns
 * @summary Add a new campaign in database
 * @returns {Campaign.model} 201 - The newly created campaign
 * @returns {string} 500 - An error message
 * @returns {string} 400 - A validation error message
 * @returns {string} 409 - A conflict error message
 * @returns {string} 401 - An unauthorized error message
 */
router.post('/campaigns', campaignController.save);

/**
 * Add or update a note
 * @route POST /campaigns/{campaign_name}
 * @group Campaigns
 * @summary Add or save a note to a campaign
 * @param {string} campaign_name - The campaign the note is related to
 * @returns {Campaign.model} 201 - The newly created note
 * @returns {string} 500 - An error message
 * @returns {string} 400 - A validation error message
 * @returns {string} 409 - A conflict error message
 * @returns {string} 401 - An unauthorized error message
 */
router.post(`/note/:campaign_name`, noteController.save);

/**
 * Add a player
 * @route POST /player/:campaign_name
 * @group Player
 * @summary Add a player to a campaign
 * @param { string } campaign_name - The name of the campaign the player is added to
 * @returns {Player.model} - The newly created player
 */
router.post('/player/:campaign_name', playerController.save)

/**
 * Add a new wiki in database
 * @route POST /wiki
 * @group Wiki
 * @summary Add a new wiki in database
 * @returns {Wiki.model} 201 - The newly created wiki
 * @returns {string} 500 - An error message
 * @returns {string} 400 - A validation error message
 * @returns {string} 409 - A conflict error message 
 */
router.post('/wiki', wikiController.save);

//#endregion POST

//#region PATCH

/**
 * Update a user in database
 * @route PATCH /profile
 * @group User
 * @summary Update a user in databse
 * @returns {User.model} 204 - The updated profile
 * @returns {string} 500 - An error message
 * @returns {string} 400 - A validation error message
 * @returns {string} 401 - An unauthorized error message
 * @returns {string} 404 - A not found error message
 */
router.patch('/profile', userController.update);

/**
 * Update a wiki in database
 * @route PATCH /wiki/:title
 * @group Wiki
 * @summary Update a wiki in database
 * @param {string} title - The title of the wiki to update
 * @returns {Wiki.model} 200 - The updated wiki
 * @returns {string} 500 - An error message
 * @returns {string} 400 - A validation error message
 * @returns {string} 404 - A not found error message
 */
router.patch('/wiki/:slug', wikiController.update);

/**
 * Update a campaign in database
 * @route PATCH /campaigns/:campaign_name
 * @group Campaigns
 * @summary Update a campaign in database
 * @param {string} campaign_name - The name of the campaign to update
 * @returns {Campaign.model} 200 - The updated campaign
 * @returns {string} 500 - An error message
 * @returns {string} 400 - A validation error message
 * @returns {string} 404 - A not found error message
 */
// router.patch('/campaigns/:campaign_name', cController.update);

//#endregion PATCH


//#region DELETE

/**
 * Delete a user in db
 * @route DELETE /profile
 * @group User
 * @summary Delete a user in db
 * @param {int} id - the id of the user to delete
 * @returns {string} - 200 User is deleted
 * @returns {string} - 204 User not found
 * @returns {string} - 500 An error message
 */
router.delete('/profile', userController.delete);

/**
 * @route DELETE /wiki/:title
 * @group Wiki
 * @summary Delete a wiki in db
 * @param {int} id - the id of the wiki to delete
 * @returns {string} - 200 Wiki is deleted
 * @returns {string} - 204 Wiki not found
 * @returns {string} - 500 An error message
 */
router.delete('/wiki/:title', wikiController.delete);

/**
 * @route DELETE /campaign/:campaign_name
 * @group Campaign
 * @summary Delete a campaign
 * @param {int} id - The id of the campaign to delete
 * @returns {string} - 200 campaign is deleted
 * @returns {string} - 204 campaign not found
 * @returns {string} - 500 An error message
 */
router.delete(`/campaign/:campaign_name`, campaignController.delete);

/**
 * @route DELETE /note/:campaign_name
 * @group Player
 * @summary Campaign creator can delete a player from the campaign players list
 * @param {int} id - The id of the player to delete
 * @returns {string} - 200 Player is deleted
 * @returns {string} - 204 Player not found
 * @returns {string} - 500 An error message
 */
// router.delete(`/campaigns/:campaign_name`, campaignsContoller.deletePlayer);

router.use((_, response) => response.status(404).json("Endpoint not found"));

module.exports = router;