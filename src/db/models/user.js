const knex = require("../knex");
const { hashPassword, isValidPassword } = require("../../utils/auth-utils");

class User {
  #passwordHash = null;

  constructor({ id, first_name, last_name, username, email, password_hash }) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.username = username;
    this.email = email;
    this.#passwordHash = password_hash;
  }

  static async list() {
    const query = "SELECT * FROM users";
    const { rows } = await knex.raw(query);
    return rows.map((user) => new User(user));
  }

  static async find(id) {
    const query = "SELECT * FROM users WHERE id = ?";
    const {
      rows: [user],
    } = await knex.raw(query, [id]);
    return user ? new User(user) : null;
  }

  static async findByUsername(username) {
    const query = "SELECT * FROM users WHERE username = ?";
    const {
      rows: [user],
    } = await knex.raw(query, [username]);
    return user ? new User(user) : null;
  }

  static async create(first_name, last_name, username, email, password) {
    const passwordHash = await hashPassword(password);

    const query = `INSERT INTO users (first_name, last_name, username, email, password_hash)
      VALUES (?, ?, ?, ?, ?) RETURNING *`;
    const {
      rows: [user],
    } = await knex.raw(query, [
      first_name,
      last_name,
      username,
      email,
      passwordHash,
    ]);
    return new User(user);
  }

  static async deleteAll() {
    return knex.raw("TRUNCATE users RESTART IDENTITY CASCADE;");
  }

  update = async (first_name, last_name, username, email) => {
    const [updatedUser] = await knex("users")
      .where({ id: this.id })
      .update({ first_name, last_name, username, email })
      .returning("*");
    return updatedUser ? new User(updatedUser) : null;
  };

  isValidPassword = async (password) => isValidPassword(password, this.#passwordHash);
}

module.exports = User;
