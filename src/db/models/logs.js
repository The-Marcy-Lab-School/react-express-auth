const knex = require('../knex');


class Logs {

    static async list() {
        const query = 'SELECT * FROM logs';
        const { rows } = await knex.raw(query);
        return rows.map((log) => new Logs(log));
    }
  
    static async create(mood, abd_pain, back_pain, nausea, fatigue, user_id) {
<<<<<<< HEAD
        const query = `INSERT INTO logs (mood, abd_pain, back_pain, nausea, fatigue, user_id )
=======
        const query = `INSERT INTO logs (mood, abd_pain, back_pain, nausea, fatigue, user_id)
>>>>>>> 6e0228c2c98d7261402034a6f9519806c1ade4d1
          VALUES (?, ?, ?, ?, ?, ?) RETURNING *`;
        const args = [mood, abd_pain, back_pain, nausea, fatigue, user_id];
        const { rows } = await knex.raw(query, args);
        const logEntry = rows[0];
        return logEntry; 
    }


    // static async update(mood, abd_pain, back_pain, nausea, fatigue, log_id, user_id) {

    //     const query = `UPDATE logs SET 
    //       mood = ?,
    //       abd_pain = ?,
    //       back_pain = ?,
    //       nausea = ?,
    //       fatigue = ?
    //       WHERE id = ? AND user_id = ? RETURNING *`;
    //     const args = [ mood, abd_pain, back_pain, nausea, fatigue, log_id, user_id];
    //     const { rows } = await knex.raw(query, args);
    //     const updatedLogEntry = rows[0];
    //     return updatedLogEntry; // Assuming you have a LogEntry class to handle the log object
    //   }
}


module.exports = Logs;

