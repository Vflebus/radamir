const client = require("../database");

class NoCampaignError extends Error {
  constructor(campaign) {
    super(`No result with campaign: ${campaign}`);
    this.code = 404;
  }
}

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
   * @param {number} id - The id of the campaign
   * @param {string} campaign_name - The name of the campaign
   * @param {string} description - The description of the campaign
   * @param {Date} created_at - The date of creation of the campaign
   * @param {string} user_id - The id of the user who created the campaign
   * @returns {Campaign} The created campaign
   * @throws {NoCampaignError} If the campaign doesn't exist
   * @throws {Error} If the campaign already exists
   */
  constructor(data) {
    if (data.length === 0) {
      throw new NoCampaignError(data[0]);
    }
    for (const prop in data)
    this[prop] = data[prop]
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
          new Campaign(row)
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
   static async getOneCampaign(id) {
    try {
      let { rows } = await client.query(
        "SELECT * FROM campaign WHERE id = $1",
        [id]
      );
        if (rows.length === 0) {
            throw new NoCampaignError(id);
        }
        return new Campaign(rows[0]);
    } catch (error) {
        console.log(error);
        throw new Error(error.detail ? error.detail : error.message);
    }
    }

  /**
   * Adds or updates a campaign in database
   * @async
   * @returns {Campaign} The campaign inserted or updated
   * @throws {Error} If the request failed
   */
  async save() {
    try {
      if (this.id) {
        await client.query(
          `
          SELECT update_campaign($1, $2, $3);`,
          [this.campaign_name, this.description, this.id]
        );
      } else {
        const { rows } = await client.query(
          `
            SELECT new_campaign($1, $2, $3) AS id`,
            [this.campaign_name, this.description, this.user_id]
        );
        this.id = rows[0].id;
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
        "DELETE FROM campaign WHERE id = $1 RETURNING *;",
        [this.id]
      );
      if (rows.length === 0) {
        throw new NoCampaignError(this.id);
      }
      return new Campaign(rows[0]);
    } catch (error) {
      console.error(error);
      throw new Error(error.detail ? error.detail : error.message);
    }
  }
}

module.exports = Campaign;
