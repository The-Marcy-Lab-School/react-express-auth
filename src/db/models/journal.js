const knex = require('../knex');

class JournalEntry {
    static async getAllJournalEntries(){
        try{
            const query = 'SELECT * FROM users JOIN journal_entries ON users.id = journal_entries.user_id';
            const { rows } = await knex.raw(query, args);
            return rows;
            } catch (err) {
                console.log(err);
                return null;
            }
        }
    
        static async getJournalEntryById(id){
            try {
                const query = 'SELECT * FROM users JOIN journal_entries ON users.id = journal_entries.id WHERE users.id = ?';
                const { rows } = await knex.raw(query, args);
                return rows;
                } catch (err) {
                    console.log(err);
                    return null;
            }
        }

        static async addJournalEntry(content, date, user_id) {
        try{
            const query = `INSERT INTO journal_entries (user_id, date, content) VALUES (?, ?, ?) RETURNING *`;
            const args = [content, date, user_id];
            const { rows } = await knex.raw(query, args);
            return rows[0];
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    static async readJournalEntries(user_id) {
        try{
            const query = 'SELECT * FROM journal_entries WHERE user.id = ?';
            const args = [user_id];
            const { rows } = await knex.raw(query, args);
            return rows;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    static async delete(id) {
        try{
            const query = 'Delete FROM journal_entries WHERE id = ? RETURNING *';
            const args = [id];
            const { rows } = await knex.raw(query, args);
            return rows[0] || null;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    static async update(entryId, updatedContent) {
        try {
            const query = 'UPDATE journal_entries SET content = ? WHERE id = ? RETURNING *';
            const args = [updatedContent, entryId];
            const { rows } = await knex.raw(query, args);
            const updatedEntry = rows[0];
            return updatedEntry || null;
        } catch (err) {
            console.log(err);
            return null;
        }
    }
}
module.exports = JournalEntry;