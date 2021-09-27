const client = require("../database");
const bcrypt = require("bcrypt");

class NoUserError extends Error {
  constructor(username) {
    super(`No result for user ${username}`);
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

  constructor(object = {}) {
    for (const key in object) {
      this[key] = object[key];
    }
  }
  
/**
 * Finds a user by username.
 * @param {string} username - The username of the user.
 * @returns {Promise<User>} A promise that resolves to the user.
 * @throws {NoUserError} If no user is found.
 * @group User
 * @static
 */
  static async findUser(username) { // TODO ajouter un paramètre pour trouver l'user
    try {
      const { rows } = await client.query(
        `SELECT username, email
                FROM user
                WHERE username=$1 
                ;`,
        [username]
      );
      if (rows[0]) {
        return new User(rows[0]); 
      }
      throw new NoUserError(username);
    } catch (error) {
      console.log(error);
      throw new Error(error.detail ? error.detail : error.message);
    }
  }
  
  /**
   * Add a new user to the database
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
        await client.query(
          `UPDATE "user"
                        SET
                        username = $1,
                        email = $2,
                        password = $3, 
                        is_admin = $4,
                        WHERE id = $5
                        ;`,
          [this.username, this.email, this.password, this.is_admin, this.id]
        );
      } else {
        const password = await bcrypt.hash(this.password, 10);
        const { rows } = await client.query(
          `INSERT INTO "user" (username, email, password, is_admin)
                        VALUES ($1, $2, $3, $4, $5)
                        RETURNING id
                        `,
          [this.username, this.email, this.password, this.is_admin]
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
   * Edit user password, username and email
   * @param {string} username
   * @param {string} email
   * @param {string} password
   * @async
   * @
   */
  async update() {
    try {
        const { rows } = await client.query(
             `UPDATE user
              SET username=$1,
                  email = $2,
                  password = $3, 
                  WHERE id=$4;`,
            [this.username, this.email, this.password, this.id]
        );
    } catch (error) {
      console.log("Erreur interne ou de requête: ", error);
      throw new Error(error.detail ? error.detail : error.message);
    }
  }
  
  //////////////////////////// TODO DELETE
    /**
   * Delete a user from the database.
   * @param {number} id - The id of the user to delete.
   * @returns {User} The deleted user.
   * @async
   */
    
  //////////////////////////// TODO DELETE

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
          )
          if (rows[0]) {
              const correctPassword = await bcrypt.compare(this.password, rows[0].password);
              if (correctPassword) {
                  return rows[0];
              }
              throw new Error('Password incorrect !')
          }
          throw new NoUserError(username);
      } catch (error) {
          console.log(error);
          throw new Error(error.detail ? error.detail : error.message);
      }
  }
  
}

module.exports = User;