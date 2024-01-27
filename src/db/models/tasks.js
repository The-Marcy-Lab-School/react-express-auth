const knex = require('../knex');

class Task {
  // Method to fetch tasks for user
  static async getTasksForUser(userId) {
    const query = `SELECT * FROM tasks WHERE user_id = ?`;
    const { rows } = await knex.raw(query, [userId]);
    return rows;
}

 
   //Method to get task 
   static async getTask(taskId) {
    const query = `SELECT * FROM tasks WHERE id = ?`;
    const { rows } = await knex.raw(query, [taskId]);
    return rows[0] ? rows[0] : null;
}


  // Method to create a task for user
  static async createTask(userId, taskData) {
    const { taskname, description, completed = false } = taskData;
    const query = `INSERT INTO tasks (user_id, taskname, description, completed)
                   VALUES (?, ?, ?, ?) RETURNING *`;
    const args = [userId, taskname, description, completed];
    const { rows } = await knex.raw(query, args);
    return rows[0];
}


  // Method to update task
  static async updateTask(taskId, taskData) {
    const { taskname, description, completed } = taskData;
    const query = `UPDATE tasks SET taskname = ?, description = ?, completed = ?
                   WHERE id = ? RETURNING *`;
    const args = [taskname, description, completed, taskId];
    const { rows } = await knex.raw(query, args);
    return rows[0] ? rows[0] : null;
}


  // Method to delete task
  static async deleteTask(taskId) {
    const query = `DELETE FROM tasks WHERE id = ?`;
    const args = [taskId];
    await knex.raw(query, args);
}

}

module.exports = Task;
