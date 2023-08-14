const knex = require('../knex');
const { hashPassword, isValidPassword } = require('../../utils/auth-utils');

class User {
  #passwordHash = null; // a private property

  constructor({ id, username, password_hash }) {
    this.id = id;
    this.username = username;
    this.#passwordHash = password_hash;
  }

  static async list() {
    const query = 'SELECT * FROM users';
    const { rows } = await knex.raw(query);
    console.log("rows users" + rows.map((user) => new User(user)))
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

  static async create(username, password) {
    const passwordHash = await hashPassword(password);
console.log("useNmae" + username)
    const query = `INSERT INTO users (username, password_hash)
      VALUES (?, ?) RETURNING *`;
    const { rows: [user] } = await knex.raw(query, [username, passwordHash]);
    return new User(user);
  }

  static async deleteAll() {
    return knex.raw('TRUNCATE users CASCADE;');
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

// const test = async () => {
//   const postObj = await User.list()
//   console.log(postObj)
// }
// test()
module.exports = User;
