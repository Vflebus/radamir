const client = require("../database");

class NoNoteError extends Error {
  constructor(note) {
    super(`No result with note: ${note}`);
    this.code = 404;
  }
}

/**
 * An entity representing a note.
 * @typedef {Object} Note
 * @property {number} id - The note's id.
 * @property {string} content - The note's content.
 * @property {boolean} is_private - Whether the note is private or not.
 * @property {number} campaign_id - The note's campaign id.
 * @property {number} user_id - The note's user id.
 */

/**
 * A model representing a note
 * @class Note
 */
class Note {
  static NoNoteError = NoNoteError;

  /**
   * The constructor for the Note model.
   * @constructor
   * @param {string} content - The note's content.
   * @param {boolean} is_private - Whether the note is private or not.
   * @param {number} campaign_id - The note's campaign id.
   * @param {number} user_id - The note's user id.
   * @param {number} id - The note's id.
   * @returns {Note} The created note.
   * @throws {NoNoteError} If the note doesn't exist.
   * @throws {Error} If the request is failed.
   */
  constructor(data) {
    if (data.length === 0) {
      throw new NoNoteError(data[0]);
    }
    for (const prop in data) this[prop] = data[prop];
  }

  /**
   * Get all the public notes created by the user.
   * @static
   * @async
   * @param {number} campaign_id - The id of the campaign.
   * @param {number} user_id - The id of the current user
   * @returns {Array<Note>} The list of all the notes.
   * @throws {Error} If the request have failed.
   */
  static async getPlayerPublicNotes(campaign_id, user_id) {
    try {
      let { rows } = await client.query(
        `SELECT * FROM note WHERE campaign_id = $1 AND user_id = $2 AND is_private = false;`,
        [campaign_id, user_id]
      );
      if (rows.length === 0) {
        throw new NoNoteError(campaign_id);
      }
      if (rows[0]) {
        const notes = [];
        for (const row in rows) {
          notes[row] = rows[row];
        }
        return notes;
      }
    } catch (error) {
      console.log(error);
      throw new Error(error.detail ? error.detail : error.message);
    }
  }

  /**
   * Get all public notes of a campaign not created by current user.
   * @static
   * @async
   * @param {number} campaign_id - The campaign's id.
   * @param {number} user_id - The id of the current user
   * @returns {Array<Note>} The list of the notes.
   * @throws {Error} If the request is failed.
   * @throws {NoNoteError} If the campaign doesn't exist.
   */
  static async getPublicNotes(campaign_id, user_id) {
    try {
      let { rows } = await client.query(
        `SELECT * FROM note WHERE campaign_id = $1 AND user_id <> $2 AND is_private = false;`,
        [campaign_id, user_id]
      );
      if (rows.length === 0) {
        throw new NoNoteError(campaign_id);
      }
      if (rows.length === 0) {
        throw new NoNoteError(campaign_id);
      }
      if (rows[0]) {
        const notes = [];
        for (const row in rows) {
          notes[row] = rows[row];
        }
        return notes;
      }
    } catch (error) {
      console.log(error);
      throw new Error(error.detail ? error.detail : error.message);
    }
  }

  /**
   * Get all the user's private notes related to this campaign
   * @static
   * @async
   * @param {number} campaign_id - The campaign's id.
   * @param {number} user_id - The id of the current user
   * @returns {Array<Note>} The list of the notes.
   * @throws {Error} If the request is failed.
   */
  static async getPrivateNotes(campaign_id, user_id) {
    try {
      let { rows } = await client.query(
        `SELECT * FROM note WHERE campaign_id = $1 AND user_id = $2 AND is_private = true`,
        [campaign_id, user_id]
      );
      if (rows.length === 0) {
        throw new NoNoteError(campaign_id);
      }
      if (rows.length === 0) {
        throw new NoNoteError(campaign_id);
      }
      if (rows[0]) {
        const notes = [];
        for (const row in rows) {
          notes[row] = rows[row];
        }
        return notes;
      }
    } catch (error) {
      console.log(error);
      throw new Error(error.detail ? error.detail : error.message);
    }
  }

  /**
   * Create or edit a note content
   * @async
   * @returns {Note}
   * @throws {NoNoteError} If the note is not found
   * @throws {error} If the request failed
   */
  async save() {
    try {
      if (this.id) {
        await client.query(`SELECT update_note($1, $2, $3, $4);`, [
          this.title,
          this.content,
          this.is_private,
          this.id,
        ]);
      } else {
        const { rows } = await client.query(
          `SELECT new_note($1, $2, $3, $4, $5) AS id`,
          [this.title, this.content, this.is_private, this.campaign_id, this.user_id]
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
   * Delete a note
   * @async
   * @throws {NoNoteError} If the note is not found
   * @throws {error} If the request failed
   */
  async delete() {
    try {
      const { rows } = await client.query(`DELETE FROM note WHERE id = $1;`, [
        this.id,
      ]);
      return rows[0];
    } catch (error) {
      console.error(error);
      throw new Error(error.detail ? error.detail : error.message);
    }
  }

  /**
   * Toggles the status of a note from public to private
   * @async
   * @throws {NoNoteError} If the note was not found
   * @throws {error} If the request has failed
   */
  async toggleIsPrivate() {
    try {
      if (this.is_private) {
        await client.query(
          `UPDATE note SET is_private = NOT is_private WHERE id = $1;`,
          [this.id]
        );
      }
    } catch (error) {
      console.error(error);
      throw new Error(error.detail ? error.detail : error.message);
    }
  }
}

module.exports = Note;
