const client = require('../database');

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

    /**
     * Fetches a single wiki from the database.
     * @param {string} title - The title of the wiki to fetch.
     * @returns {Wiki|null} A wiki or null if not found.
     * @static
     * @async
     * @example Wiki.findByTitle('test1234')
     */
    static async findByTitle(title) {
        try {
            const { rows } = await client.query('SELECT title FROM wiki WHERE title=$1', [title]);
            if (rows[0]) {
                return new Wiki(rows[0]);
            }
            return null;
        } catch (error) {
            console.log(error);
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
// TODO jsdoc
    static async getBlocks() {
        try {
            const { rows } = await client.query('SELECT block.title, block.content, block.id FROM table1 AS wiki, table2 AS block WHERE wiki.id = block.wiki_id');
            return rows.map(row => new Wiki(row));
        } catch (error) {
            console.log(error);
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
    
    /**
     * Add a new wiki to the database
     */
    async save() {
        try {
            const { rows } = await client.query('INSERT INTO wiki (title) VALUES ($1) RETURNING id', [this.title]);
            this.id = rows[0].id;
        } catch (error) {
            console.log('Erreur interne ou de requête: ', error);
            throw new Error(error.detail ? error.detail : error.message);
        }
    }

    // /**
    //  * Add a new wiki to a region in database
    //  * @param {string} region - The region to add the wiki to.
    //  */
    // async addToRegion(region) {
    //     try {
    //         const { rows } = await client.query('INSERT INTO region (region, wiki.id) VALUES ($1, $2)', [region, this.id]);
    //     } catch (error)
    // }
