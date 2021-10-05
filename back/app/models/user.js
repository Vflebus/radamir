const client = require("../database");
const bcrypt = require("bcrypt");

class NoUserError extends Error {
  constructor(id) {
    super(`No result for user ${id}`);
  }
}

/**
 * An entity representing a user.
 * @typedef User
 * @property {number} id - The id of the user.
 * @property {string} username - The username of the user.
 * @property {string} password - The password of the user.
 * @property {string} email - The email of the user.
 * @property {boolean} is_admin - Whether the user is an admin.
 */

/**
 * A model representing a user.
 * @class User
 */
class User {
  static NoUserError = NoUserError;

  constructor(data) {
    if (data.length === 0) {
      throw new NoUserError(data[0]);
    }
    for (const prop in data)
    this[prop] = data[prop]
  }

  /**
   * Finds a user by username.
   * @param {string} username - The username of the user.
   * @returns {Promise<User>} A promise that resolves to the user.
   * @throws {NoUserError} If no user is found.
   * @group User
   * @static
   */
  static async findUser(id) {
    try {
      const { rows } = await client.query(
        `SELECT * FROM "user" WHERE id = $1`, [id]);
      if (rows.length === 0) {
      throw new NoUserError(id);
      }
      return new User(rows[0])
    } catch (error) {
      console.log(error);
      throw new Error(error.detail ? error.detail : error.message);
    }
  }

  /**
   * Add a new user to the database
   * @async
   * @param {string} username
   * @param {string} email
   * @param {string} password
   * @returns {Promise<User>}
   * @throws {NoUserError}
   * @throws {Error}
   */
  async save() {
    try {
      if (this.id) {
        const password = await bcrypt.hash(this.password, 10);
        await client.query(
          `
          SELECT update_user($1, $2, $3, $4)`,
          [this.username, this.email, password, this.id]);
      } else {
        const password = await bcrypt.hash(this.password, 10);
        const { rows } = await client.query(
          `
          SELECT new_user($1, $2, $3) AS id`,
          [this.username, this.email, password]
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
   * Delete a user from the database.
   * @param {number} id - The id of the user to delete.
   * @returns {User} The deleted user.
   * @async
   */
  async delete() {
    try {
      const { rows } = await client.query("DELETE FROM user WHERE id=$1", [
        this.id,
      ]);
    } catch (error) {
      console.log("Erreur interne ou de requête: ", error);
      throw new Error(error.detail ? error.detail : error.message);
    }
  }

  /**
   * Finds a user by username and password.
   * @returns {Promise<User>} A promie that resolves to the user.
   * @throws {NoUserError} If no user is found.
   * @group User
   * @async
   */
  async login() {
    try {
      const { rows } = await client.query(
        `SELECT *
              FROM "user"
              WHERE username = $1
              OR email = $2
              ;`,
        [username, email]
      );
      if (rows[0]) {
        const correctPassword = await bcrypt.compare(
          this.password,
          rows[0].password
        );
        if (correctPassword) {
          return rows[0];
        }
        throw new Error("Password incorrect !");
      }
      throw new NoUserError(username);
    } catch (error) {
      console.log(error);
      throw new Error(error.detail ? error.detail : error.message);
    }
  }
}

module.exports = User;