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
  constructor(content, is_private, campaign_id, user_id, id) {
    for (let key in arguments) {
      this[key] = arguments[key];
    }
  }

  /**
   * Get all public notes of a campaign.
   * @static
   * @async
   * @param {number} campaign_id - The campaign's id.
   * @returns {Array<Note>} The list of the notes.
   * @throws {Error} If the request is failed.
   * @throws {NoNoteError} If the campaign doesn't exist
   */
  static async getPublicNotes(campaign_id) {
    try {
      let { rows } = await client.query(
        `
                SELECT * FROM note WHERE campaign_id = $1 AND is_private = false;`,
        [campaign_id]
      );
      if (rows.length === 0) {
        throw new NoNoteError(campaign_id);
      }
      return rows.map(
        (row) =>
          new Note(
            row.content,
            row.is_private,
            row.campaign_id,
            row.user_id,
            row.id
          )
      );
    } catch (error) {
      console.log(error);
      throw new Error(error.detail ? error.detail : error.message);
    }
  }

  // ! TODO getPrivateNotes()

  // ! TODO save()

  // ! TODO delete()
}
