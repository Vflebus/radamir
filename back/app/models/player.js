const client = require("../database");

class NoPlayerError extends Error {
  constructor(player) {
    super(`No result with player ${player}`);
  }
}

/**
 * An entity representing a player in a campaign
 * @typedef  campaign_has_player
 * @property {number}   campaign_id     - The id of the campaign
 * @property {number}   user_id         - The id of the user who is a player
 */

/**
 * A model representing a player
 * @class Player
 */

class Player {
  static NoPlayerError = NoPlayerError;

  /**
   *The constructor of the Player model
   * @contructor
   * @param {number}   campaign_id     - The id of the campaign
   * @param {number}   user_id         - The id of the user who is a player
   * @returns {Player}         The created player
   * @throws {noPlayerError}   If the player doesn't exists
   * @throws {error}           If the player already exists
   */
  constructor(campaign_id, user_id) {
    for (let key in arguments) {
      this[key] = arguments[key];
    }
  }

  /**
   * Add a player to the campaign
   * @async
   * @returns {Player} The player added to campaign
   * @throws {Error} If the request failed
   */
  async save() {
    try {
      if (this.id) console.log("Le joueur fait déja partie de cette campagne");
      else {
        const { rows } = await client.query(
          `SELECT new_campaign_has_player($1) AS id`,
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

  async delete() {
    try {
        await client.query(
            `DELETE FROM campaign_has_player WHERE id = $1;`,
            [this.id]
        );
    } catch (error) {
        console.error(error);
        throw new Error(error.detail ? error.detail : error.message);
    }
  }
}

module.exports = Player;
