const knex = require('../knex');

class Tag {
  static async list() {
    const query = 'SELECT * FROM tags';
    const { rows } = await knex.raw(query);
    return rows || [];
  }

  static async create(name, page_id) {
    try {
      const query = `INSERT INTO tags (name, page_id)
    VALUES (?, ?) RETURNING *`;
      const args = [name, page_id];
      const { rows } = await knex.raw(query, args);
      return rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

module.exports = Tag;
