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
      return rows.map((quiz_attempts) => new QuizAttempts(quiz_attempts)); // Corrected instance creation
    } catch(error) {
      console.log(error);
      return null;
    }
  }

  static async find(id) {
    try {
      const query = 'SELECT * FROM quiz_attempts WHERE id = ?';
      const { rows: [quiz_attempts] } = await knex.raw(query, [id]);
      return quiz_attempts ? new QuizAttempts(quiz_attempts) : null; // Corrected instance creation
    } catch(error) {
      console.log(error);
      return null;
    }
  }

  static async create(user_id, quiz_id, percentage, score_count) {
    console.log("testing create" + user_id )
    try {
      const query = `INSERT INTO quiz_attempts (user_id, quiz_id, percentage, score_count)
                     VALUES (?, ?, ?, ?) RETURNING *`;
      const [quiz_attempts] = await knex.raw(query, [user_id, quiz_id, percentage,score_count]);
      return new QuizAttempts(quiz_attempts); // Corrected instance creation
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  static async deleteAll() {
    try {
      return knex('quiz_attempts').del();
    } catch(error) {
      console.log(error);
      return null;
    }
  }  
}

//YOU CAN RUN THIS AND PASS THINGS INTO IT TEST WHATS GONNA BE DISPLAYED IN THE TERMINAL AND IN YOUR TABLEPLUS
const test = async () => {
  const attempt = await QuizAttempts.create(1, 2, 3, 4); // Corrected method call
  console.log(attempt);
};
test();

module.exports = QuizAttempts;
