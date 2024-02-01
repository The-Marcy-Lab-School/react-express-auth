const knex = require('../knex');


class Logs {
    #passwordHash = null; // a private property

    constructor({ id, userId, mood, abdominal_pain, backpain, nauseau, fatigue }) {
        this.id = id;
        this.userId = userId;
        this.mood = mood;
        this.abdominal_pain = abdominal_pain
        this.backpain = backpain,
            this.nauseau = nauseau,
            this.nauseau = nauseau
      
      
    }

    static async list() {
        const query = 'SELECT * FROM logs';
        const { rows } = await knex.raw(query);
        return rows.map((user) => new Logs(user));
    }
  
    static async create(userId, mood, abdominal_pain, backpain, nauseau, fatigue) {
        const query = `INSERT INTO logs (user_id, mood, abdominal_pain, backpain, nauseau, fatigue)
          VALUES (?, ?, ?, ?, ?, ?) RETURNING *`;
        const args = [userId, mood, abdominal_pain, backpain, nauseau, fatigue];
        const { rows } = await knex.raw(query, args);
        const logEntry = rows[0];
        return logEntry; // Assuming you have a LogEntry class to handle the log object
    }

    static async deleteAll() {
        return knex.raw('TRUNCATE users;');
    }
    static async update(logId, userId, mood, abdominal_pain, backpain, nauseau, fatigue) {
        const query = `UPDATE logs SET 
          mood = ?,
          abdominal_pain = ?,
          backpain = ?,
          nauseau = ?,
          fatigue = ?
          WHERE id = ? AND user_id = ? RETURNING *`;
        const args = [mood, abdominal_pain, backpain, nauseau, fatigue, logId, userId];
        const { rows } = await knex.raw(query, args);
        const updatedLogEntry = rows[0];
        return updatedLogEntry; // Assuming you have a LogEntry class to handle the log object
      }
}

module.exports = User;
