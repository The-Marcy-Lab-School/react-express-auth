const knex = require('../knex');

class Comment {

  constructor({ id, post_id, user_id, content, time}) {
    this.id = id;
    this.post_id = post_id;
    this.user_id = user_id;
    this.content = content;
    this.time = time;
  }

  static async listAllComments() {
    const query = 'SELECT * FROM comments';
    const { rows } = await knex.raw(query);
    return rows.map((comments) => new Post(comments));
  }

  static async findAllCommentsByUser(user_id) {
    const query = 'SELECT * FROM comments WHERE user_id = ?';
    const args = [user_id];
    const { rows } = await knex.raw(query, args);
    const comment = rows[0];
    return comment ? new Comment(comment) : null;
  }

  static async createComment(post_id, user_id, content, time) {
    const query = `INSERT INTO comments (post_id, user_id, content, time)
      VALUES (?, ?, ?, ?) RETURNING *`;
    const args = [post_id, user_id, content, time];
    const { rows } = await knex.raw(query, args);
    const comment = rows[0];
    return new Comment(comment);
  }

  static async updateComment(id, content, time) {
    const query = `UPDATE comments
      SET user_id = ?, content = ?, time = ?
      WHERE id = ? RETURNING *`;
    const args = [id, post_id, user_id, content, time];
    const { rows } = await knex.raw(query, args);
    const comment = rows[0];
    return new Comment(comment);
  }
  static async deleteComment(id) {
    const query = `DELETE FROM comments WHERE id = ? RETURNING *`;
    const args = [id];
    const { rows } = await knex.raw(query, args);
    const comment = rows[0];
    return new Comment(comment);
  }
}

module.exports = Comment;
