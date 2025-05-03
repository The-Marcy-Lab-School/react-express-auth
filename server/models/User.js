const knex = require('../db/knex');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 12;

class User {
  #passwordHash = null;

  constructor({ id, name, password_hash }) {
    this.id = id;
    this.name = name;
    this.#passwordHash = password_hash;
  }


  isValidPassword = async (password) => {
    return await bcrypt.compare(password, this.#passwordHash);
  };

  static async create(name, password) {
    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
    const query = `
      INSERT INTO users (name, password_hash)
      VALUES (?, ?) RETURNING *`;
    const result = await knex.raw(query, [name, passwordHash]);
    const rawUserData = result.rows[0];
    return new User(rawUserData);
  }

  static async list() {
    const query = `SELECT * FROM users`;
    const result = await knex.raw(query);
    return result.rows.map((rawUserData) => new User(rawUserData));
  }

  static async find(id) {
    const query = `SELECT * FROM users WHERE id = ?`;
    const result = await knex.raw(query, [id]);
    const rawUserData = result.rows[0];
    return rawUserData ? new User(rawUserData) : null;
  }

  static async findByName(name) {
    const query = `SELECT * FROM users WHERE name = ?`;
    const result = await knex.raw(query, [name]);
    const rawUserData = result.rows[0];
    return rawUserData ? new User(rawUserData) : null;
  }

  static async update(id, name) {
    const query = `
      UPDATE users
      SET name=?
      WHERE id=?
      RETURNING *`;
    const result = await knex.raw(query, [name, id]);
    const rawUpdatedUser = result.rows[0];
    return rawUpdatedUser ? new User(rawUpdatedUser) : null;
  }

  static async deleteAll() {
    return knex('users').del();
  }
}

module.exports = User;

