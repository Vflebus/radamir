const client = require("../database");

/*
/campaigns -> GET, POST, DELETE
               ^----^------^--------> GET Recup la liste des campagnes, 
                                      POST Envoi d'une nouvelle campagne, 
                                      DELETE Supprimer une campagne (MJ)

/campaigns/:campaign_name −> GET, POST, PATCH, DELETE
                              ^----^------^------^--------> GET Recup une campagne, les notes (publiques/privées), 
                                                            POST Envoi d'une nouvelle note / Ajout d'un nouveau joueur (MJ),
                                                            PATCH Modifier une note / Modifier description de la campagne (MJ),
                                                            DELETE Supprimer une note / Supression d'un joueur (MJ)

*/

class NoCampaignError extends Error {
  constructor(campaign) {
    super(`No result with campaign: ${campaign}`);
    this.code = 404;
  }
}

// class NoNoteError extends Error { }

/**
 * An entity representing a campaign
 * @typedef Campaign
 * @property {number} id - The id of the campaign
 * @property {string} campaign_name - The name of the campaign
 * @property {string} description - The description of the campaign
 * @property {Date} created_at - The date of creation of the campaign
 * @property {number} user_id - The id of the user who created the campaign
 */

/**
 * A model representing a campaign
 * @class Campaign
 */

class Campaign {
  static NoCampaignError = NoCampaignError;

  /**
   * The constructor for the Campaign model
   * @constructor
   * @param {string} campaign_name - The name of the campaign
   * @param {string} description - The description of the campaign
   * @param {number} id - The id of the campaign
   * @param {string} user_id - The id of the user who created the campaign
   * @param {Date} created_at - The date of creation of the campaign
   * @returns {Campaign} The created campaign
   * @throws {NoCampaignError} If the campaign doesn't exist
   * @throws {Error} If the campaign already exists
   */
  constructor(campaign_name, description, id, user_id, created_at) {
    for (let key in arguments) {
      this[key] = arguments[key];
    }
  }

  /**
   * Get all the campaigns
   * @static
   * @async
   * @returns {Array<Campaign>} The list of the campaigns
   * @throws {Error} If the request is failed
   */
  static async getAllCampaigns() {
    try {
      let { rows } = await client.query("SELECT * FROM campaign;");
      return rows.map(
        (row) =>
          new Campaign(
            row.campaign_name,
            row.description,
            row.id,
            row.user_id,
            row.created_at
          )
      );
    } catch (error) {
      console.log(error);
      throw new Error(error.detail ? error.detail : error.message);
    }
  }

  /**
   * Get one campaign by its name
   * @static
   * @async
   * @param {string} campaign_name - The name of the campaign
   * @returns {Campaign} The campaign
   * @throws {NoCampaignError} If the campaign doesn't exist
   * @throws {Error} If the request is failed
   */
  static async getOneCampaign(campaign_name) {
    try {
      let { rows } = await client.query(
        "SELECT * FROM campaign WHERE campaign_name = $1",
        [campaign_name]
      );
      if (rows.length === 0) {
        throw new NoCampaignError(campaign_name);
      }
      return new Campaign(
        rows[0].campaign_name,
        rows[0].description,
        rows[0].id,
        rows[0].user_id,
        rows[0].created_at
      );
    } catch (error) {
      console.log(error);
      throw new Error(error.detail ? error.detail : error.message);
    }
  }

  /**
   * Adds or updates a campaign in database
   * @async
   * @returns {Campaign} The campaign inserted or updated
   * @throws {Error} If the request is failed
   */
  async save() {
    /* try {
           if (this.id) {
               await client.query(`
               UPDATE campaign SET description = $1 WHERE id = $2;`, 
               [this.description, this.id]);
           } else {
               const { rows } = await client.query(`
               INSERT INTO campaign (campaign_name, description, user_id)
               VALUES ($1, $2, $3);`,
               [this.campaign_name, this.description, this.user_id]);
           }
       } */
    try {
      if (this.id) {
        await client.query(
          `
            SELECT update_campaign($1)`,
          [this]
        );
      } else {
        const { rows } = await client.query(
          `
            SELECT new_campaign($1) AS id`,
          [this]
        );
        this.id = rows[0].id;
        return this;
      }
    } catch (error) {
      console.log(error);
      throw new Error(error.detail ? error.detail : error.message);
    }
  }

  /**
   * Delete a campaign from database
   * @async
   * @returns {Campaign} The campaign deleted
   * @throws {Error} If the request is failed
   */
  async delete() {
    try {
        const { rows } = await client.query(
            "DELETE FROM campaign WHERE id = $1;",
            [this.id]);
    } catch (error) {
      console.error(error);
      throw new Error(error.detail ? error.detail : error.message);
    }
  }
}

module.exports = Campaign;