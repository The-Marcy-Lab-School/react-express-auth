const knex = require('../knex');
const { hashPassword, isValidPassword } = require('../../utils/auth-utils');

class User {
  #passwordHash = null;

  constructor({ id, username, password_hash, latitude, longitude }) {
    this.id = id;
    this.username = username;
    this.#passwordHash = password_hash;
    this.location = {latitude, longitude}
  }

  static async list() {
    const query = 'SELECT * FROM users';
    const { rows } = await knex.raw(query);
    return rows.map((user) => new User(user));
  }

  static async find(id) {
    console.log(id)
    const query = 'SELECT * FROM users WHERE id = ?';
    const { rows: [user] } = await knex.raw(query, [id]);
    return user ? new User(user) : null;
  }

  static async findByUsername(username) {
    const query = 'SELECT * FROM users WHERE username = ?';
    const { rows: [user] } = await knex.raw(query, [username]);
    return user ? new User(user) : null;
  }

  static async updateSafe(id, isSafe) {
    const query = `
    UPDATE users
    SET is_safe = ?
    WHERE id = ?
    RETURNING *;`;
    const { rows: [user] } = await knex.raw(query, [isSafe, id]);
    return user ? new User(user) : null;
  }

  static async create(username, password, { myLatitude, myLongitude }/*, isSafe*/) {
    const passwordHash = await hashPassword(password);

    const query = `INSERT INTO users (username, password_hash, latitude, longitude, is_safe)
      VALUES (?, ?, ?, ?, true) RETURNING *`;
    const { rows: [user] } = await knex.raw(query, [username, passwordHash, myLatitude, myLongitude/*, isSafe*/]);
    return new User(user);
  }

  static async deleteAll() {
    return knex.raw('TRUNCATE users;');
  }

  update = async (username) => { // dynamic queries are easier if you add more properties
    const [updatedUser] = await knex('users')
      .where({ id: this.id })
      .update({ username })
      .returning('*');
    return updatedUser ? new User(updatedUser) : null;
  };

  isValidPassword = async (password) => (
    isValidPassword(password, this.#passwordHash)
  );
}

module.exports = User;
