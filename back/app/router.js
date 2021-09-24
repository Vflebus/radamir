const { Router } = require("express");

const wikiController = require("./controllers/wikiController"); 
const bController = require("./controllers/bController"); // TODO remplacer et ajouter les bons controllers
const cController = require("./controllers/cController"); // TODO remplacer et ajouter les bons controllers
const dController = require("./controllers/dController"); // TODO remplacer et ajouter les bons controllers
const eController = require("./controllers/eController"); // TODO remplacer et ajouter les bons controllers

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
router.get("/profile", aController.findById);

// GET /campaigns

/**
 * Responds with all campaigns in database
 * @route GET /campaigns
 * @group Campaigns
 * @summary Responds with all campaigns in database
 * @returns {Array<Campaign>} 200 - An array of campaigns
 * @returns {string} 500 - An error message
 */
router.get("/campaigns", bController.findAll);

// GET /campaigns/:campaign_name

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
router.get(`/campaigns/:campaign_name(/^[^\s.]{1,255}$/gm)`, cController.findByName);

// GET /wiki

/**
 * Responds with all informations from wiki in the database
 * @route GET /wiki
 * @group Wiki
 * @summary Responds with all informations from wiki in the database
 * @returns {Array<Wiki>} 200 - An array of wiki
 * @returns {string} 500 - An error message
 */
router.get(`/wiki`, wikiController.findAll);

// GET /wiki/:title

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
router.get(`/wiki/:title(/^[^\s.]{1,255}$/gm)`, wikiController.findByTitle);

//#endregion GET

//#region POST

// POST /signup

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
router.post('/signup', aController.save);

// POST /signin

/**
 * Retrieve connection informations from a user
 * @route POST /signin
 * @group User
 * @summary Retrieve connection informations from a user
 * @returns {User.model} 200 - The user
 * @returns {string} 500 - An error message
 * @returns {string} 400 - A validation error message
 */
router.post('/signin', aController.findByEmail);

// POST /campaigns

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
router.post('/campaigns', bController.save);

// POST /campaigns/:campaign_name

/**
 * Add a note and/or a new player to a campaign
 * @route POST /campaigns/{campaign_name}
 * @group Campaigns
 * @summary Add a note and/or a new player to a campaign
 * @param {string} campaign_name - The name of the campaign to update
 * @returns {Campaign.model} 201 - The newly created note / added player
 * @returns {string} 500 - An error message
 * @returns {string} 400 - A validation error message
 * @returns {string} 409 - A conflict error message
 * @returns {string} 401 - An unauthorized error message
 */
router.post(`/campaigns/:campaign_name(/^[^\s.]{1,255}$/gm)`, cController.update);

// POST /wiki

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

router.use((_, response) => response.status(404).json("Endpoint not found"));

module.exports = router;