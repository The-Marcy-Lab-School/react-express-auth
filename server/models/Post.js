const knex = require("../db/knex");

class Post {
  static async addLike() {}

  static async createPost(title, body, user_id) {
    try {
      const SQL = `INSERT INTO posts (title, body, user_id) VALUES (?, ?, ?) RETURNING *`;
      const { rows: [postData] } = await knex.raw(SQL, [title, body, user_id]);
      return postData;
    } catch (error) {
      throw new Error(`Unable to create post: ${error.message}`);
    }
  }

  static async deletePost(post_id) {
    try {
      const SQL = "DELETE FROM posts WHERE id = ? RETURNING *;";
      const post = await Post.findPost(post_id);

      if (!post) throw new Error(`Post with id-${post_id} does not exist.`);
      const { rows: [deletedPost] } = await knex.raw(SQL, [post_id]);

      return deletedPost;
    } catch (error) {
      throw new Error("unable to delete post with id");
    }
  }

  static async updatePost(title, body, id) {} // work on later

  static async findPost(post_id) {
    try {
      const SQL = `SELECT * FROM posts WHERE id = ?`;
      const { rows: [post] } = await knex.raw(SQL, [post_id]);
      
      if (!post) throw new Error(`Post with id-${post_id} does not exist.`);
      return post;
    } catch (error) {
      throw new Error(`Unable to find post: ${error.message}`);
    }
  }
}

module.exports = Post;
