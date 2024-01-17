const knex = require('../knex');


class Post {

  constructor({ id, title, content, url, user_id }) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.url = url;
    this.user_id = user_id;
  }

  static async listAll() {
    const query = 'SELECT * FROM posts';
    const { rows } = await knex.raw(query);
    return rows.map((post) => new Post(post));
  }

  static async find(id) {
    const query = 'SELECT * FROM posts WHERE post_id = ?';
    const args = [id];
    const { rows } = await knex.raw(query, args);
    const post = rows[0];
    return post ? new Post(post) : null;
  }

  static async findByUserID(user_id) {
    const query = 'SELECT * FROM posts WHERE user_id = ?';
    const args = [user_id];
    const { rows } = await knex.raw(query, args);
    const post = rows[0];
    return post ? new Post(post) : null;
  }

  static async create(title, content, url, user_id ) {
    const passwordHash = await hashPassword(password);

    const query = `INSERT INTO users (post_title, post_content, post_url, user_id)
      VALUES (?, ?, ?, ?) RETURNING *`;
    const args = [title, content, url, user_id];
    const { rows } = await knex.raw(query, args);
    const post = rows[0];
    return new Post(post);
  }

  static async delete(id) {
    const query = 'DELETE FROM posts WHERE post_id = ?';
    const args = [id];
    await knex.raw(query, args);
  }
}

module.exports = Post;
