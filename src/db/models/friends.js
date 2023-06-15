const knex = require('../knex');
const { hashPassword, isValidPassword } = require('../../utils/auth-utils');

class Friend {

  constructor({sender, recipient}) {
    this.sender = sender;
    this.recipient = recipient;
  }

  static async list() {
    const query = 'SELECT * FROM users';
    const { rows } = await knex.raw(query);
    return rows.map((user) => new User(user));
  }

  static async find(userID, recipientID) {
    const query = `SELECT * FROM friends 
          WHERE sender_id = ? AND recipient_id = ?`;
    const { rows: [friend] } = await knex.raw(query, [userID, recipientID]);
    return friend ? new Friend(friend.somthing) : null;
  }

  static async findByUsername(username) {
    const query = 'SELECT * FROM users WHERE username = ?';
    const { rows: [user] } = await knex.raw(query, [username]);
    return user ? new User(user) : null;
  }

  static async create(sender, recipient) {

    const query = `INSERT INTO friends (sender, recipient)
      VALUES (?, ?) RETURNING *`;
    const { rows: [friend] } = await knex.raw(query, [sender, recipient]);
    return new Friend(friens.something);
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
}

module.exports = Friend;