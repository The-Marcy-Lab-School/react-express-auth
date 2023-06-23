const knex = require('../knex');
const { hashPassword, isValidPassword } = require('../../utils/auth-utils');

class Friend {

  constructor({username}) {
    this.username = username;
  }

  static async list(userId) {
    const query = `
    SELECT users.username
    FROM friends
    JOIN users ON friends.recipient_id = users.id
    WHERE friends.sender_id = ?;`;
    const { rows } = await knex.raw(query, [userId]);
    return rows.map(row => new Friend(row))
  }

  static async find(userID, recipientID) {
    const query = `SELECT * FROM friends 
          WHERE sender_id = ? AND recipient_id = ?`;
    const { rows: [friend] } = await knex.raw(query, [userID, recipientID]);
    return friend ? new Friend(friend.somthing) : null;
  }

  static async delete(userId, friendId) {
    const query = `
    DELETE FROM friends
    WHERE sender_id = ?
    AND recipient_id = ?
    RETURNING *;
`;
    const { rows: [friend] } = await knex.raw(query, [userId, friendId]);
    return friend
  }

  static async create(senderId, recipientId) {
    const query = `
    INSERT INTO friends (sender_id, recipient_id)
      VALUES (?, ?) 
      RETURNING *`;
    const { rows: [friend] } = await knex.raw(query, [senderId, recipientId]);

    return friend
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