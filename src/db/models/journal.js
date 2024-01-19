const knex = require('../knex');

class JournalEntry {
    constructor({ id, userId, date, content }) {
        this.id = id;
        this.userId = userId;
        this.date = date;
        this.content = content;
    }

    static async create(userId, date, content) {
        const query = `INSERT INTO journal_entries (user_id, date, content) VALUES (?, ?, ?) RETURNING *`;
        const args = [userId, date, content];
        const { rows } = await knex.raw(query, args);
        const entry = rows[0];
        return new JournalEntry(entry);
    }

    static async readJournalEntries(userId) {
        const query = 'SELECT * FROM journal_entries WHERE user_id = ?';
        const args = [userId];
        const { rows } = await knex.raw(query, args);
        return rows.map((entry) => new JournalEntry(entry))
    }

    static async delete(id) {
        const query = 'Delete FROM journal_entries WHERE id = ? RETURNING *';
        const args = [id];
        const { rows } = await knex.raw(query, args);
        const deletedEntry = rows[0];
        return deletedEntry ? new JournalEntry(deletedEntry) : null;
    }

}

module.exports = JournalEntry;