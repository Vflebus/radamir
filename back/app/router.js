const { Router, response } = require("express");

const wikiController = require("./controllers/wikiController"); 
const userController = require("./controllers/userController");
const campaignController = require("./controllers/campaignController");
const noteController = require("./controllers/noteController");
const playerController = require("./controllers/playerController");

const router = Router();

//#region GET

// GET /profile

/**
 * @route GET /profile
 * @group User
 * @summary Responds with the id of the connected user
 * @returns {int} 200 - An integer as id
 * @returns {string} 500 - An error message
 */
router.get("/profile", userController.findUser);

// ! TODO
/**
 * @route GET /
 * @group User
 * @summary ????? userController.getInfos c quoi ?
 */

/**
 * @route GET /campaigns
 * @group Campaigns
 * @summary Responds with all campaigns in database
 * @returns {Array<Campaign>} 200 - An array of campaigns
 * @returns {string} 500 - An error message
 */
router.get("/campaigns", campaignController.getAllCampaigns);

/**
 * @route GET /campaigns/{campaign_name}
 * @group Campaigns
 * @summary Responds with one campaign in database
 * @param {number} id - The name of the campaign to fetch
 * @returns {string} 200 - A single campaign identified by its name
 * @returns {string} 404 - An error message
 * @returns {string} 500 - An error message
 */
router.get(`/campaigns/:id`, campaignController.getOneCampaign);

/**
 * @route GET /wiki
 * @group Wiki
 * @summary Responds with all informations from wiki in the database
 * @returns {Array<Wiki>} 200 - An array of wiki
 * @returns {string} 500 - An error message
 */
router.get(`/wiki`, wikiController.getAllWikis);

/**
 * @route GET /wiki/{title}
 * @group Wiki
 * @summary Responds with one wiki in database
 * @param {string} title - The title of the wiki to fetch
 * @returns {string} 200 - A single wiki identified by its title
 * @returns {string} 404 - An error message
 * @returns {string} 500 - An error message
 */
router.get(`/wiki/:id`, wikiController.getWikiById);

/**
 * @route GET /player-public-notes/{id}
 * @group Note
 * @summary Responds the list of public notes related to a campaign and owned by this user
 * @param {number} id - The id of the campaign
 * @returns {array<Note>} 200 - An array of notes
 * @returns {string} 404 - An error message
 * @returns {string} 500 - An error message
 */
router.get(`/player-public-notes/:campaign_id/:user_id`, noteController.getPlayerPublicNotes);

/**
 * @route GET /public-notes/{id}
 * @group Note
 * @summary Responds the list of public notes related to a campaign and not owned by this user
 * @param {number} id - The id of the campaign
 * @returns {array<Note>} 200 - An array of notes
 * @returns {string} 404 - An error message
 * @returns {string} 500 - An error message
 */
 router.get(`/public-notes/:id`, noteController.getPublicNotes);


/**
 * @route GET /private-notes/{id}
 * @group Note
 * @summary Responds the list of private notes related to a campaign and not owned by this user
 * @param {number} id - The id of the campaign
 * @returns {array<Note>} 200 - An array of notes
 * @returns {string} 404 - An error message
 * @returns {string} 500 - An error message
 */
 router.get(`/private-notes/:id`, noteController.getPrivateNotes);

 /**
  * @route GET /players/{id}
  * @groupe Player
  * @summary Responds the list of players added to this campaign
  * @param {number} id - The id of the campaign
  * @returns {array<Player>} 200 - An array of players
  * @returns {string} 404 - An error message
  * @returns {string} 500 - An error message
  */
  router.get(`/players/:id`, playerController.findParty);
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
 * Add a new campaign in database or update it
 * @route POST /campaigns
 * @group Campaigns
 * @summary Add a new campaign in database or update an existing one
 * @returns {Campaign.model} 201 - The newly created campaign
 * @returns {string} 500 - An error message
 * @returns {string} 400 - A validation error message
 * @returns {string} 409 - A conflict error message
 * @returns {string} 401 - An unauthorized error message
 */
router.post('/campaigns', campaignController.save);

/**
 * Add or update a note
 * @route POST /campaigns/{campaign_id}
 * @group Campaigns
 * @summary Add or save a note to a campaign
 * @param {string} campaign_name - The campaign the note is related to
 * @returns {Campaign.model} 201 - The newly created note
 * @returns {string} 500 - An error message
 * @returns {string} 400 - A validation error message
 * @returns {string} 409 - A conflict error message
 * @returns {string} 401 - An unauthorized error message
 */
router.post(`/note/:id`, noteController.save);

/**
 * Add a player
 * @route POST /player/:campaign_id
 * @group Player
 * @summary Add a player to a campaign
 * @param { string } campaign_name - The name of the campaign the player is added to
 * @returns {Player.model} - The newly created player
 */
router.post('/player/:campaign_id', playerController.save)

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

// ! TODO JSDOC 
router.patch('/wiki/:id', wikiController.save);

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
router.patch('/campaigns/:id', campaignController.save);

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
router.delete(`/wiki/:id`, wikiController.delete);

/**
 * @route DELETE /campaigns/:campaign_name
 * @group Campaign
 * @summary Delete a campaign
 * @param {int} id - The id of the campaign to delete
 * @returns {string} - 200 campaign is deleted
 * @returns {string} - 204 campaign not found
 * @returns {string} - 500 An error message
 */
router.delete(`/campaigns/:id`, campaignController.delete);

/**
 * @route DELETE /note/:campaign_name
 * @group Note
 * @summary Campaign creator can delete a note from the campaign
 * @param {int} id - The id of the player to note
 * @returns {string} - 200 Player is deleted
 * @returns {string} - 204 Player not found
 * @returns {string} - 500 An error message
 */
router.delete(`/note/:id`, noteController.delete);

/**
 * @route DELETE /player/:campaign_name
 * @group Player
 * @summary Campaign creator can remove a player from his campaign
 * @param {int} - The id of the campaign
 * @returns {string} - 200 player is deleted
 * @returns {string} - 204 player not found
 * @returns {string} - 500 An error message
 */
router.delete(`/player/:campaign_name`, playerController.delete);

//#endregion DELETE

router.use((_, response) => response.status(404).json("Endpoint not found"));

module.exports = router;