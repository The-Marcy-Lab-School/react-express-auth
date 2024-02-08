const knex = require("../knex");

class Thread {
  static async list() {
    const query = "SELECT * FROM threads";
    const { rows } = await knex.raw(query);
    return rows;
  }

  static async create(user_id, post_id, comment) {
    const query = `INSERT INTO threads (user_id, post_id, comment)
          VALUES (?, ?, ?) RETURNING *`;
    const args = [user_id, post_id, comment];
    const { rows } = await knex.raw(query, args);
    const threadEntry = rows[0];
    return threadEntry;
  }

  static async find(id) {
    const query = "SELECT * FROM threads WHERE id = ?";
    const args = [id];
    const { rows } = await knex.raw(query, args);
    const thread = rows[0];
    return thread || []
  }

//   static async update(title, id) {
//     const query = "UPDATE posts SET title = ? WHERE id = ? RETURNING *";
//     const args = [title, id];
//     console.log(args)
//     const { rows } = await knex.raw(query, args);
//     return rows;
//     }
}

module.exports = Thread;
