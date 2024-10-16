const knex = require("../db/knex");

class Post {
  static async addLike() {}

  static async create(title, body, id) {
    const query = `INSERT INTO posts (title, body, user_id)
          VALUES (?, ?, ?) RETURNING *`;
    const result = await knex.raw(query, [title, body, id]);
    return result.rows[0];
  }

  static async delete() {}

  static async update(title, body, id) {
    const query = `
    UPDATE posts
    SET username=?
    WHERE id=?
    RETURNING *
  `;
    const result = await knex.raw(query, [username, id]);
    const rawUpdatedUser = result.rows[0];
    return rawUpdatedUser ? new User(rawUpdatedUser) : null;
  }
}

module.exports = Post;
