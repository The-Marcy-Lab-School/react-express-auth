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

        static async addJournalEntry(content, date, userId) {
        try{
        const query = `INSERT INTO journal_entries (content, date, user_id) VALUES (?, ?, ?) RETURNING *`;
        const args = [content, date, userId];
        const { rows } = await knex.raw(query, args);
        return rows[0];
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    static async readJournalEntries(userId) {
        try{
        const query = 'SELECT * FROM journal_entries WHERE user_id = ?';
        const args = [userId];
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
}

module.exports = JournalEntry;