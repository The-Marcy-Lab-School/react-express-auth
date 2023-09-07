const knex = require('../knex');

class QuizAttempts {

  constructor({ id, user_id, quiz_id, percentage, score_count }) {
    this.id = id;
    this.user_id = user_id;
    this.quiz_id = quiz_id;
    this.percentage = percentage;
    this.score_count = score_count;
  }

  static async list() {
    try {
      const query = 'SELECT * FROM quiz_attempts';
      const { rows } = await knex.raw(query);
      return rows.map((quiz_attempt) => new QuizAttempts(quiz_attempt));
    } catch(error) {
      console.error("Error fetching quiz attempts:", error);
      throw error;
    }
  }

  static async find(id) {
    try {
      const query = 'SELECT * FROM quiz_attempts WHERE id = ?';
      const { rows: [quiz_attempt] } = await knex.raw(query, [id]);
      return quiz_attempt ? new QuizAttempts(quiz_attempt) : null;
    } catch(error) {
      console.error("Error fetching quiz attempt by ID:", error);
      throw error;
    }
  }

  static async create(user_id, quiz_id, percentage, score_count) {
    try {
      const query = `
        INSERT INTO quiz_attempts (user_id, quiz_id, percentage, score_count)
        VALUES (?, ?, ?, ?)
        RETURNING *
      `;

      const { rows: [quiz_attempt] } = await knex.raw(query, [user_id, quiz_id, percentage, score_count]);
      return new QuizAttempts(quiz_attempt);
    } catch(error) {
      console.error("Error creating quiz attempt:", error);
      throw error;
    }
  }

  static async deleteAll() {
    try {
      return knex('quiz_attempts').del();
    } catch(error) {
      console.error("Error deleting all quiz attempts:", error);
      throw error;
    }
  }  
}

// Testing function
const test = async () => {
  try {
    const attempt = await QuizAttempts.create(1, 2, 3, 4);
    console.log("Created quiz attempt:", attempt);
  } catch (error) {
    console.error("Test error:", error);
  }
};

test();

module.exports = QuizAttempts;
