const { Router } = require("express");

const aController = require("./controllers/aController"); // TODO remplacer et ajouter les bons controllers
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
 * @group Profile
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
router.get(`/campaigns/:campaign_name(/^.{0,255}$/gm)`, cController.findByPk);

// GET /wiki

/**
 * Responds with all informations from wiki in the database
 * @route GET /wiki
 * @group Wiki
 * @summary Responds with all informations from wiki in the database
 * @returns {Array<Wiki>} 200 - An array of wiki
 * @returns {string} 500 - An error message
 */
router.get(`/wiki`, dController.findAll);

// GET /wiki/:title

/**
 * Responds with one campaign in database
 * @route GET /wiki/{title}
 * @group Wiki
 * @summary Responds with one wiki in database
 * @param {string} campaign_name - The name of the wiki to fetch
 * @returns {string} 200 - A single wiki identified by its title
 * @returns {string} 404 - An error message
 * @returns {string} 500 - An error message
 */
router.get(`/wiki/:title(/^.{0,255}$/gm)`, cController.findByPk);

//#endregion GET

//#region POST

// POST /profile

/**
 * Add a new user in database
 * @route POST /profile
 * @group Profile
 * @summary Add a new user in database
 * @param {ReqProfileJson.model | Profile.model} object.body.required - Object containing the properties to insert/update an user
 * @returns {Profile.model} 201 - The newly created user
 * @returns {Profile.model} 204 - The updated profile
 * @returns {string} 500 - An error message
 * @returns {string} 400 - A validation error message
 */
router.post('/profile', aController.save);

//#endregion POST

router.use((_, response) => response.status(404).json("Endpoint not found"));

module.exports = router;
