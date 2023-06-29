const knex = require("../knex");

class Bookmarks {
  constructor({ id, user_id, page_id }) {
    this.id = id;
    this.user_id = user_id;
    this.page_id = page_id;
  }
  static async create(user_id, page_id) {
    try {
      const query = `
                INSERT INTO bookmark (user_id, page_id)
                    VALUES (?, ?) RETURNING *`;
      const {
        rows: [bookmark],
      } = await knex.raw(query, [user_id, page_id]);
      return new Bookmarks(bookmark);
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  static async find(id) {
    const query = `SELECT bookmark.id, facility_doctor, description ,specialty, address, photo, bookmark.user_id, bookmark.page_id FROM bookmark JOIN pages ON bookmark.page_id  = pages.id WHERE bookmark.user_id =?`;
    const { rows } = await knex.raw(query, [id]);
    return rows;
    // ? new Bookmarks(bookmark) : null;
  }
  static async list() {
    const query = "SELECT * FROM bookmark";
    const { rows } = await knex.raw(query);
    return rows.map((bookmark) => new Bookmarks(bookmark));
  }
  static async delete(id) {
    try {
      await knex.raw(`DELETE FROM bookmark WHERE id= ?`, [Number(id)]);
      const query = `DELETE FROM bookmark WHERE id = ? RETURNING *;`;
      const res = await knex.raw(query, [Number(id)]);
      return res.rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}
module.exports = Bookmarks;
