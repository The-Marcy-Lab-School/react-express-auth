const knex = require('../knex');
const { hashPassword, isValidPassword } = require('../../utils/auth-utils');

class User {
  #passwordHash = null; // a private property

  // Why have a constructor here? We need a way to take the raw data returned from
  // the database and hide the passwordHash before sending it back to the controller
  constructor({ id, username, password_hash, name, email }) {
    this.id = id;
    this.username = username;
    this.#passwordHash = password_hash;
    this.name = name;
    this.email = email;
  }

  static async list() {
    const query = 'SELECT * FROM users';
    const { rows } = await knex.raw(query);
    // use the constructor to hide each user's passwordHash
    return rows.map((user) => new User(user));
  }

  static async find(id) {
    const query = 'SELECT * FROM users WHERE id = ?';
    const args = [id];
    const { rows } = await knex.raw(query, args);
    const user = rows[0];
    return user ? new User(user) : null;
  }

  static async findByUsername(username) {
    const query = 'SELECT * FROM users WHERE username = ?';
    const args = [username];
    const { rows } = await knex.raw(query, args);
    const user = rows[0];
    return user ? new User(user) : null;
  }

  static async create(username, password, name, email) {
    const passwordHash = await hashPassword(password);

    const query = `INSERT INTO users (username, password_hash, name, email)
      VALUES (?, ?, ?, ?) RETURNING *`;
    const args = [username, passwordHash, name, email];
    console.log(args);
    const { rows } = await knex.raw(query, args);
    const user = rows[0];
    return new User(user);
  }

  static async destroyUser(id) {
    try {
      const query = `DELETE FROM users WHERE id = (?)`;
      const res = await knex.raw(query, [id]);
      return res.rows || null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async deleteAll() {
    return knex.raw('TRUNCATE users;');
  }

  update = async (username) => {
    // dynamic queries are easier if you add more properties
    const rows = await knex('users')
      .where({ id: this.id })
      .update({ username })
      .returning('*');

    const updatedUser = rows[0];
    return updatedUser ? new User(updatedUser) : null;
  };

  isValidPassword = async (password) =>
    isValidPassword(password, this.#passwordHash);
}

module.exports = User;
