const knex = require('../knex');

class Entry {

    static async create (user_id, log_id){
        const query = `INSERT INTO entries (user_id, log_id)
          VALUES (?, ?) RETURNING *`;
        const args = [user_id, log_id];
        const { rows } = await knex.raw(query, args);
        const newEntry = rows[0];
        return newEntry;
    }

    static async list() {
        const query = 'SELECT * FROM entries';
        const { rows } = await knex.raw(query);
        return rows.map((entry) => new Entry(entry));
    }

    static async findEntriesByUser (user_id){
        const query = "SELECT * FROM entries WHERE user_id = ?";
        const args = [user_id];
        const { rows } = await knex.raw(query, args);
        return rows;
    }
}

module.exports = Entry;