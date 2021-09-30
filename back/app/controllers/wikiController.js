const Wiki = require('../models/wiki');
// const client = require("../database");

// class NoWikiError extends Error {
//   constructor(wiki) {
//     super(`Wiki ${wiki} not found`);
//     this.code = 404;
//   }
// }

// /*
// CREATE TABLE wiki (
// 	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
// 	slug TEXT NOT NULL UNIQUE,
// 	title VARCHAR(255) NOT NULL UNIQUE,
// 	full_title TEXT,
// 	"type" VARCHAR(255)  NOT NULL
// );

// CREATE TABLE "block" (
// 	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
// 	title VARCHAR(255),
// 	content TEXT NOT NULL,
// 	wiki_id INT NOT NULL REFERENCES wiki(id)
// );
// */

// /**
//  * An entity representing a wiki.
//  * @typedef Wiki
//  * @property {number} id
//  * @property {string} slug
//  * @property {string} title
//  * @property {string} full_title
//  * @property {string} type
//  */

// /**
//  * A model representing a wiki.
//  * @class Wiki
//  */

// class Wiki {
//   static NoWikiError = NoWikiError;

// /**
//  * The constructor for a Wiki.
//  * @constructor
//  * @param {number} id - The id of the wiki.
//  * @param {string} slug - The slug of the wiki.
//  * @param {string} title - The title of the wiki.
//  * @param {string} full_title - The full title of the wiki.
//  * @param {string} type - The type of the wiki.
//  * @returns {Array<Wiki>} An array of Wiki objects.
//  */
//   constructor(id, slug, title, full_title, type) {
//     for (let key in arguments) {
//       this[key] = arguments[key];
//     }
//   }

//   /**
//    * Get a all wikis and their blocks.
//    * @static
//    * @async
//    * @returns {Array<Wiki>} An array of Wiki objects.
//    * @throws {NoWikiError} If the wiki does not exist.
//    */
//   static async getAllWikis() {
//     const result = await client.query(
//       "SELECT * FROM wiki LEFT JOIN block ON wiki.id = block.wiki_id"
//     );
//     return result.rows.map(row => new Wiki(...row));
//   }
// }

const wikiController = {
	
	getAllWikis: async (_, response) => {
		try {
			const wikiPages = await Wiki.getAllWikis();
			response.json(wikiPages);
		} catch (error) {
			console.error(error);
			response.status(500).json(error.message);
		}
	}, 
	
	save: async (request, response) => {
		try {
			const wiki = await Wiki.save(request.body);
			response.json(wiki);
		} catch (error) {
			console.error(error);
			response.status(500).json(error.message);
		}
	},

	delete: async (request, response) => {
		try {
			const wiki = await Wiki.delete(request.params.id);
			response.json(wiki);
		} catch (error) {
			console.error(error);
			response.status(500).json(error.message);
		}
	},

};

module.exports = wikiController;