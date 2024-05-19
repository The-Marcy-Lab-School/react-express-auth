const knex = require('../knex');

// the model is the interface (set of functions) for interacting
// with the posts database table
class Post {
  static async create(content, img_public_id, user_id) {
    const query = `
      INSERT INTO posts (content, img_public_id, user_id)
      VALUES (?, ?, ?) RETURNING *
    `;
    const { rows } = await knex.raw(query, [content, img_public_id, user_id]);
    return rows[0]
  }

  static async findPostsByUserId(user_id) {
    const query = `
      SELECT posts.* , users.username
      FROM posts 
      JOIN users
        ON posts.user_id = users.id
      WHERE user_id = ?
      ORDER BY
        posts.created_at DESC
    `;
    const { rows } = await knex.raw(query, [user_id]);
    return rows;
  }

  static async getAllPosts() {
    const query = `
      SELECT posts.*, users.username
      FROM posts
      JOIN users
        ON posts.user_id = users.id
      ORDER BY
        posts.created_at DESC
    `;
    const { rows } = await knex.raw(query);
    return rows;
  }

  static async getFollowsPostsByUserId(user_id) {
    const query = `
      SELECT posts.*, users.username
      FROM posts
      JOIN users
        ON posts.user_id = users.id
      JOIN follows
        ON follows.following_user_id = posts.user_id
      WHERE follows.follower_user_id = ?
      ORDER BY
        posts.created_at DESC
    `;
    const { rows } = await knex.raw(query, user_id);
    return rows;
  }

  static async deletePost(postId) {
    const query = `
      DELETE FROM posts
      WHERE id=?
    `;
    await knex.raw(query, postId);
    return true;
  }

  static async deleteAllPostsByUser(userId) {
    const query = `
      DELETE FROM posts
      WHERE user_id=?
    `;
    await knex.raw(query, userId);
    return true;
  }
}

module.exports = Post;
