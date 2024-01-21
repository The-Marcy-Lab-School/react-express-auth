const knex = require('../knex');
class Task {

    static async create(task_name, description) {
        const query = 'INSERT INTO task (task_name, description) VALUES (?, ?) RETURNING *;';
        const args = [task_name, description];
        const { rows } = await knex.raw(query)
        
     return rows.map(row => new Task(row.task_name, row.description));

        
    }

    static async list() {
        const query = 'SELECT * FROM task';
        const { rows } = await knex.raw(query);
        // use the constructor to hide each user's passwordHash
        return rows.map((user) => new Task(user));
    }
    
    static async find(id) {
        const query = 'SELECT * FROM task WHERE id = ?';
        const args = [id];
        const { rows } = await knex.raw(query, args);
        const user = rows[0];
        return user ? new Task(user) : null;
    }
    
    static async delete(id) {
        const query = 'DELETE FROM task WHERE id = ?;'
        const args = [id];
        const { rows } = await knex.raw(query, args);
        const user = rows[0];
        return user ? new Task(user) : null;
      }


}
module.exports = Task;