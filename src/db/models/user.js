const knex = require('../knex');
const { hashPassword, isValidPassword } = require('../../utils/auth-utils');

class User {
  #passwordHash = null;

  constructor({ id, first_name, last_name, age, gender, race, ethnicity, username, password_hash, email, picture }) {
    this.id = id;
    this.username = username;
    this.#passwordHash = password_hash;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.age = age;
    this.gender = gender;
    this.race = race;
    this.ethnicity = ethnicity;
    this.picture = picture;
  }

  static async list() {
    const query = 'SELECT * FROM users';
    const { rows } = await knex.raw(query);
    return rows.map((user) => new User(user));
  }

  static async find(id) {
    const query = 'SELECT * FROM users WHERE id = ?';
    const { rows: [user] } = await knex.raw(query, [id]);
    return user ? new User(user) : null;
  }

  static async findByUsername(username) {
    const query = 'SELECT * FROM users WHERE username = ?';
    const { rows: [user] } = await knex.raw(query, [username]);
    return user ? new User(user) : null;
  }
  // help me
  static async create(first_name, last_name, age, gender, race, ethnicity, username, password, email, picture) {
    const passwordHash = await hashPassword(password);

console.log({first_name, last_name, age, gender, race, ethnicity, username, password, email, picture})

    const query = `INSERT INTO users (first_name, last_name, age, gender, race, ethnicity, username, password_hash, email, picture)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?) RETURNING *`;
    const { rows: [user] } = await knex.raw(query, [first_name, last_name, age, gender, race, ethnicity, username, passwordHash, email, picture]);
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
