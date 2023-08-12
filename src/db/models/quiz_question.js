const knex = require('../knex');

class QuizQuestions {

  constructor({ id, question, answer, wrong_answer_1, wrong_answer_2, wrong_answer_3, quiz_id }) {
    this.id = id;
    this.question = question;
    this.answer = answer;
    this.wrong_answer_1 = wrong_answer_1;
    this.wrong_answer_2 = wrong_answer_2;
    this.wrong_answer_3 = wrong_answer_3;
    this.quiz_id = quiz_id;
  }

  static async list() {
    try {
      const query = 'SELECT * FROM quiz_questions';
      const { rows } = await knex.raw(query);
      return rows.map((quiz_questions) => new QuizQuestions(quiz_questions));
    } catch(error) {
      console.log(error);
      return null;
    }
  }

  static async find(id) {
    try {
      const query = 'SELECT * FROM quiz_questions WHERE id = ?';
      const { rows: [quiz_questions] } = await knex.raw(query, [id]);
      return quiz_questions ? new QuizQuestions(quiz_questions) : null;
    } catch(error) {
      console.log(error);
      return null;
    }
  }

  static async create(question, answer, wrong_answer_1, wrong_answer_2, wrong_answer_3, quiz_id) {
    try {
      const query = `
        INSERT INTO quiz_questions (question, answer, wrong_answer_1, wrong_answer_2, wrong_answer_3, quiz_id)
        VALUES (?, ?, ?, ?, ?, ?)
        RETURNING *
      `;
  
      const [quiz_questions] = await knex.raw(query, [question, answer, wrong_answer_1, wrong_answer_2, wrong_answer_3, quiz_id]);
      return new QuizQuestions(quiz_questions);
    } catch(error) {
      console.log(error);
      return null;
    }
  }
  static async create(question, answer, wrong_answer_1, wrong_answer_2, wrong_answer_3, quiz_id) {
    try {
      const query = `
        INSERT INTO quiz_questions (question, answer, wrong_answer_1, wrong_answer_2, wrong_answer_3, quiz_id)
        VALUES (?, ?, ?, ?, ?, ?)
        RETURNING *
      `;
  
      const [quiz_questions] = await knex.raw(query, [question, answer, wrong_answer_1, wrong_answer_2, wrong_answer_3, quiz_id]);
      return new QuizQuestions(quiz_questions);
    } catch(error) {
      console.log(error);
      return null;
    }
  }
    
  static async deleteAll() {
    try {
      return knex('quiz_questions').del();
    } catch(error) {
      console.log(error);
      return null;
    }
  }  

}

// const test = async () => {
//   const postObj = await QuizQuestions.create('dog.png',"ds","dsds","dsds","Dsds",1)
//   console.log(postObj)
// }
// test()

module.exports = QuizQuestions;