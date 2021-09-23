const client = require('../database');

/**
 * An entity representing a wiki.
 * @typedef Wiki
 * @property {string} id - The id of the wiki.
 * @property {string} title - The title of the wiki.
 * @property {string} slug - The slug of the wiki.
 */

/**
 * A model representing a wiki.
 * @class Wiki
 */
class Wiki {
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
     * Fetches all the wikis from the database and region from region
     * @returns {Array<Wiki>} An array of wikis.
     * @static
     * @async
     */
    static async findAll() {
        try {
            const { rows } = await client.query('SELECT wiki.title, region.region FROM table1 AS wiki, table2 AS region');
            return rows.map(row => new Wiki(row));
        } catch (error) {
            console.log(error);
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
}
    /**
     * Fetches a single wiki from the database.
     * @param {string} title - The title of the wiki to fetch.
     * @returns {Wiki|null} A wiki or null if not found.
     * @static
     * @async
     * @example Wiki.findByTitle('test1234')
     */