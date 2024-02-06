const knex = require('../knex');


class Logs {

    static async list() {
        const query = 'SELECT * FROM logs';
        const { rows } = await knex.raw(query);
        return rows.map((log) => new Logs(log));
    }
  
    static async create(mood, abd_pain, back_pain, nausea, fatigue, user_id) {
        const query = `INSERT INTO logs (mood, abd_pain, back_pain, nausea, fatigue, user_id)
          VALUES (?, ?, ?, ?, ?, ?) RETURNING *`;
        const args = [mood, abd_pain, back_pain, nausea, fatigue, user_id];
        const { rows } = await knex.raw(query, args);
        const logEntry = rows[0];
        return logEntry; 
    }


}


module.exports = Logs;

