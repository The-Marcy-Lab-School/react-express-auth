const knex = require('../knex');
const { hashPassword, isValidPassword } = require('../../utils/auth-utils');

class Comment {

  constructor({ event_id, user_id, comment }) {
    this.event_id = event_id;
    this.user_id = user_id;
    this.comment = comment;
  }

  static async listComment() {
    const query = 'SELECT * FROM comments';
    const { rows } = await knex.raw(query);
    return rows;
  }

  static async create(event_id, user_id, commented) {
    const query = `INSERT INTO comments (event_id, user_id, comments)
      VALUES (?, ?, ?)
      RETURNING *`;
    const { rows: [comment] } = await knex.raw(query, [event_id, user_id, commented]);
    return comment;
  }
  static async updateComment(commented, id) {
    const query = `
    UPDATE comments
    SET comments = ?
    WHERE id = ?
    RETURNING *;`;
    const { rows: [comment] } = await knex.raw(query, [commented, id]);
    return comment;
  }
  
  static async deleteComment(id) {
    console.log(id)
    const query = `DELETE FROM comments 
    WHERE id = ?
    RETURNING *`;
    const { rows } = await knex.raw(query, [id]);
    return rows
  }




}

module.exports = Comment;