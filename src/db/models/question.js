const knex = require('../knex');

class Questions {

    constructor({ id, user_id, quiz_id, percentage, score_count }) {
        this.id = id;
        this.user_id = user_id;
        this.quiz_id = quiz_id;
        this.percentage = percentage;
        this.score_count = score_count;
      }
    

  static async list() {
    try {
      const query = 'SELECT * FROM quiz_questions';
      const { rows } = await knex.raw(query);
      console.log("model list quiz" + rows.map((quizzes) => new Questions(quizzes)))
      return rows
      //.map((quizzes) => new Quizzes(quizzes));
    } catch(error) {
      console.log(error);
      return null;
    }
  }


  // static async list() {
  //   const query = 'SELECT * FROM users';
  //   const { rows } = await knex.raw(query);
  //   return rows.map((user) => new User(user));
  // }
  static async find(id) {
    try {
      const query = 'SELECT * FROM quiz_questions WHERE id = ?';
      const { rows: [quizzes] } = await knex.raw(query, [id]);
      return quizzes ? new Questions(quizzes) : null;
    } catch(error) {
      console.log(error);
      return null;
    }
  }

  static async create(question, answer, wrong_answer_1, wrong_answer_2, wrong_answer_3, quiz_id) {
    //console.log("quzzes", question, answer, wrong_answer_1, wrong_answer_2, wrong_answer_3, quiz_id)
    try {
      const query = `
        INSERT INTO quiz_questions (question, answer, wrong_answer_1, wrong_answer_2, wrong_answer_3, quiz_id)
        VALUES (?, ?, ?, ?, ?, ?)
        RETURNING *
      `;
  
      const{ rows: [quiz_question] }  = await knex.raw(query, [question, answer, wrong_answer_1, wrong_answer_2, wrong_answer_3, quiz_id]);
      return new Questions(quiz_question);
    } catch(error) {
      console.log(error);
      return null;
    }
  }

  // static async create(topic) {
  //   console.log("topics:" + topic)
  //   try {
  //     const query = `INSERT INTO quizzes (topic)
  //       VALUES (?) RETURNING *`;
  //     const { rows: [quizzes] } = await knex.raw(query, [topic]);
  //     return new Quizzes(quizzes);
  //   } catch(error) {
  //     console.log(error);
  //     return null;
  //   }
  // }
  static async deleteAll() {
    try {
      return knex('quizzes').del();
    } catch(error) {
      console.log(error);
      return null;
    }
  }  

 

}


module.exports = Questions;