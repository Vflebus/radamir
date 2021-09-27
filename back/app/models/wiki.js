const client = require("../database");

class NoTitleError extends Error {
  constructor(title) {
    super(`No result with title: ${title}`);
  }
}

/**
 * An entity representing a wiki.
 * @typedef Wiki
 * @property {number} id - The id of the wiki.
 * @property {string} title - The title of the wiki.
 * @property {string} slug - The slug of the wiki.
 */

/**
 * A model representing a wiki.
 * @class Wiki
 */
class Wiki {

  static NoTitleError = NoTitleError;

  /**
   * The constructor for the Wiki model.
   * @param {Object} object - A literal object with the properties of the wiki copied into the instance.
   */
  constructor(object = {}) {
    for (const key in object) {
      this[key] = object[key];
    }
  }

  /**
   * Fetches all the wiki titles from the database and region from region
   * @returns {Array<Wiki>} An array of wikis.
   * @static
   * @async
   */
  static async findAll() {
    try {
      let { rows } = await client.query(
        `SELECT 
          jsonb_agg(DISTINCT jsonb_build_object('title', wiki.title))AS resulttitles,
          jsonb_agg(DISTINCT jsonb_build_object('region', region.region))AS resultregions
          FROM wiki, region
        ;`

      );
      return rows.map((row) => new Wiki(row));
    } catch (error) {
      console.log(error);
      throw new Error(error.detail ? error.detail : error.message);
    }
  }

  /**
   * Fetches a single wiki from the database.
   * @param {string} title - The title of the wiki to fetch.
   * @returns {Wiki|error} A wiki or error if not found.
   * @static
   * @async
   * @example Wiki.findByTitle('test1234')
   * @throws {NoTitleError} if no wiki is found with the given title
   */
  static async findByTitle(title) {
    try {
      const { rows } = await client.query(
        "SELECT * FROM wiki WHERE title=$1",
        [title]
      );
      if (rows[0]) {
        return new Wiki(rows[0]);
      }
      throw new NoTitleError;
    } catch (error) {
      console.log(error);
      throw new Error(error.detail ? error.detail : error.message);
    }
  }

  /**
   * Fetches all the blocks of a wiki from the database.
   * @returns {Array<Block>} An array of blocks.
   * @static
   * @async
   */
  static async getBlocks() {
    try {
      const { rows } = await client.query(
        "SELECT table2.title, table2.content, table2.id FROM table1 AS wiki, table2 AS block WHERE table1.id = table2.wiki_id"
      );
      return rows.map((row) => new Wiki(row));
    } catch (error) {
      console.log(error);
      throw new Error(error.detail ? error.detail : error.message);
    }
  }

  /**
   * Add a new wiki to the database.
   */
  async save() {
    try {
      const { rows } = await client.query(
        "INSERT INTO wiki (title) VALUES ($1) RETURNING id",
        [this.title]
      );
      this.id = rows[0].id;
    } catch (error) {
      console.log("Erreur interne ou de requête: ", error);
      throw new Error(error.detail ? error.detail : error.message);
    }
  }

  /**
   * Update a wiki in the database.
   * @param {string} title - The title of the wiki to update.
   * @returns {Wiki} The updated wiki.
   * @async
   */
  async update() {
    try {
      const { rows } = await client.query(
        "UPDATE wiki SET title=$1 WHERE id=$2",
        [this.title, this.id]
      );
    } catch (error) {
      console.log("Erreur interne ou de requête: ", error);
      throw new Error(error.detail ? error.detail : error.message);
    }
  }

  /**
   * Delete a wiki from the database.
   * @param {number} id - The id of the wiki to delete.
   * @returns {Wiki} The deleted wiki.
   * @async
   */
	async delete() {
		try {
			const { rows } = await client.query(
				"DELETE FROM wiki WHERE id=$1", 
				[this.id]				
			);	
		} catch (error) {
			console.log("Erreur interne ou de requête: ", error);
			throw new Error(error.detail ? error.detail : error.message);
		}
	}
}

module.exports = Wiki;
