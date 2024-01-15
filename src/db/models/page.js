const knex = require('../knex');

class Page {
  static async list() {
    const query = 'SELECT * FROM pages';
    const { rows } = await knex.raw(query);
    return rows || [];
  }

  static async create(title, content, user_id) {
    try {
      const query = `INSERT INTO pages (title, content, user_id)
    VALUES (?, ?, ?) RETURNING *`;
      const args = [title, content, user_id];
      const { rows } = await knex.raw(query, args);
      return rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

module.exports = Page;
