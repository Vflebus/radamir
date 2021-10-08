const client = require("../database");

class NoBlockError extends Error {
  constructor(id) {
    super(`No result for block ${id}`);
  }
}

/**
 * An entity representing a block in wiki
 * @typedef Block
 * @property {number} id - The id the block
 * @property {string} title - The title of the block
 * @property {string} content - The content of the block
 * @property {number} wiki_id - The id of the wiki that own the block
 */

/**
 * A model representing a Block
 * @class Block
 */
class Block {
  constructor(data) {
    if (data.length === 0) {
      throw new NoBlockError(data[0]);
    }
    for (const prop in data) {
      this[prop] = data[prop];
    }
  }

  /**
   * Add or update a block
   * @param {string} title
   * @param {string} content
   * @param {number} wiki_id
   * @returns {Promise<Block>}
   * @throws {NoBlockError}
   * @throws {Error}
   */
  async save() {
    try {
      if (this.id) {
        await client.query(`SELECT update_block($1, $2, $3)`, [
          this.title,
          this.content,
          this.id,
        ]);
      } else {
        const { rows } = await client.query(
          `SELECT new_block($1, $2, $3) AS id`,
          [this.title, this.content, this.wiki_id]
        );
        this.id = rows[0].id;
        return this;
      }
    } catch (error) {
        console.log(error);
        if (error.detail) {
          throw new Error(error.detail);
        }
        throw error;
    }
  }

  /**
   * Delete a block from the database.
   * @param {number} id - The id of the block to delete.
   * @returns {Block} The deleted block.
   * @async
   */
  async delete() {
    try {
      const { rows } = await client.query(
        `DELETE FROM "block" WHERE id = $1 RETURNING id, title`,
        [this.id]
      );
      if (rows.length === 0) {
        throw new NoBlockError(this.id);
      }
      return rows[0];
    } catch (error) {
      console.log(error);
      throw new Error(error.detail ? error.detail : error.message);
    }
  }
}

module.exports = Block;
