const knex = require('../knex');


class Log {

    static async list() {
        const query = 'SELECT * FROM logs';
        const { rows } = await knex.raw(query);
        return rows.map((log) => new Log(log));
    }
  
    static async create(mood, abd_pain, back_pain, nausea, fatigue, user_id) {
        const query = `INSERT INTO logs (mood, abd_pain, back_pain, nausea, fatigue, user_id, )
          VALUES (?, ?, ?, ?, ?, ?) RETURNING *`;
        const args = [mood, abd_pain, back_pain, nausea, fatigue, user_id];
        const { rows } = await knex.raw(query, args);
        const logEntry = rows[0];
        return logEntry; // Assuming you have a LogEntry class to handle the log object
    }

    static async update(mood, abd_pain, back_pain, nausea, fatigue, logId, user_id) {
        const query = `UPDATE logs SET 
          mood = ?,
          abd_pain = ?,
          back_pain = ?,
          nausea = ?,
          fatigue = ?
          WHERE id = ? AND user_id = ? RETURNING *`;
        const args = [ mood, abd_pain, back_pain, nausea, fatigue, logId, user_id];
        const { rows } = await knex.raw(query, args);
        const updatedLogEntry = rows[0];
        return updatedLogEntry; // Assuming you have a LogEntry class to handle the log object
      }
}

module.exports = Log;
