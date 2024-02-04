const knex = require('../knex');

class Comment {

  constructor({ id, post_id, user_id, content, time}) {
    this.id = id;
    this.post_id = post_id;
    this.user_id = user_id;
    this.content = content;
    this.time = time;
  }

  static async list() {
    const query = 'SELECT * FROM comments';
    const { rows } = await knex.raw(query);
    return rows.map((comments) => new Comment(comments));
  }

  static async findAllCommentsByUser(user_id) {
    const query = 'SELECT * FROM comments WHERE user_id = ?';
    const args = [user_id];
    const { rows } = await knex.raw(query, args);
    const comment = rows.map((comments) => new Comment(comments));;
    return comment 
  }

  static async create(post_id, user_id, content, time) {
    const query = `INSERT INTO comments (post_id, user_id, content, time)
      VALUES (?, ?, ?, ?) RETURNING *`;
    const args = [post_id, user_id, content, time];
    const { rows } = await knex.raw(query, args);
    const comment = rows[0];
    return new Comment(comment);
  }

  static async update(id, content, time) {
    const query = `UPDATE comments
      SET user_id = ?, content = ?, time = ?
      WHERE id = ? RETURNING *`;
    const args = [id, post_id, user_id, content, time];
    const { rows } = await knex.raw(query, args);
    const comment = rows[0];
    return new Comment(comment);
  }
  static async delete(id) {
    const query = `DELETE FROM comments WHERE id = ? RETURNING *`;
    const args = [id];
    const { rows } = await knex.raw(query, args);
    const comment = rows[0];
    return new Comment(comment);
  }
}

module.exports = Comment;
