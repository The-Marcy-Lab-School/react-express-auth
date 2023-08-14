// const knex = require('../knex');

// class QuizQuestions {

//   constructor({ id, question, answer, wrong_answer_1, wrong_answer_2, wrong_answer_3, quiz_id }) {
//     this.id = id;
//     this.question = question;
//     this.answer = answer;
//     this.wrong_answer_1 = wrong_answer_1;
//     this.wrong_answer_2 = wrong_answer_2;
//     this.wrong_answer_3 = wrong_answer_3;
//     this.quiz_id = quiz_id;
//   }

//   static async list() {
//     console.log("question list")
//     try {
//       const query = 'SELECT * FROM quiz_questions';
//       const { rows } = await knex.raw(query);
//       console.log("rows from list" + rows)
//       return rows.map((quiz_questions) => new QuizQuestions(quiz_questions));
//     } catch(error) {
//       console.log(error);
//       return null;
//     }
//   }

//   static async find(id) {
//     try {
//       const query = 'SELECT * FROM quiz_questions WHERE id = ?';
//       const { rows: [quiz_questions] } = await knex.raw(query, [id]);
//       return quiz_questions ? new QuizQuestions(quiz_questions) : null;
//     } catch(error) {
//       console.log(error);
//       return null;
//     }
//   }

//   // static async create(question, answer, wrong_answer_1, wrong_answer_2, wrong_answer_3, quiz_id) {
//   //   try {
//   //     const query = `
//   //       INSERT INTO quiz_questions (question, answer, wrong_answer_1, wrong_answer_2, wrong_answer_3, quiz_id)
//   //       VALUES (?, ?, ?, ?, ?, ?)
//   //       RETURNING *
//   //     `;
  
//   //     const [quiz_questions] = await knex.raw(query, [question, answer, wrong_answer_1, wrong_answer_2, wrong_answer_3, quiz_id]);
//   //     return new QuizQuestions(quiz_questions);
//   //   } catch(error) {
//   //     console.log(error);
//   //     return null;
//   //   }
//   // }
//   static async create(question, answer, wrong_answer_1, wrong_answer_2, wrong_answer_3, quiz_id) {
//     console.log("quzzes" + question, answer, wrong_answer_1, wrong_answer_2, wrong_answer_3, quiz_id)
//     try {
//       const query = `
//         INSERT INTO quiz_questions (question, answer, wrong_answer_1, wrong_answer_2, wrong_answer_3, quiz_id)
//         VALUES (?, ?, ?, ?, ?, ?)
//         RETURNING *
//       `;
  
//       const [quiz_questions] = await knex.raw(query, [question, answer, wrong_answer_1, wrong_answer_2, wrong_answer_3, quiz_id]);
//       return new QuizQuestions(quiz_questions);
//     } catch(error) {
//       console.log(error);
//       return null;
//     }
//   }
    
//   static async deleteAll() {
//     try {
//       return knex('quiz_questions').del();
//     } catch(error) {
//       console.log(error);
//       return null;
//     }
//   }  

// }

// // const test = async () => {
// //   const postObj = await QuizQuestions.list()
// //   console.log(postObj)
// // }
// // test()

// module.exports = QuizQuestions;



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

  // static async list() {
  //   console.log("question list")
  //   try {
  //     const query = 'SELECT * FROM quiz_questions';
  //     const { rows } = await knex.raw(query);
  //     console.log("rows from list", rows)
  //     return rows.map((quiz_question) => new QuizQuestions(quiz_question));
  //   } catch(error) {
  //     console.log(error);
  //     return null;
  //   }
  // }
  static async list() {
    try {
      const query = 'SELECT * FROM quiz_questions';
      const { rows } = await knex.raw(query);
      console.log("model list quiz" + rows.map((quizzes) => new Quizzes(quizzes)))
      return rows
      //.map((quizzes) => new Quizzes(quizzes));
    } catch(error) {
      console.log(error);
      return null;
    }
  }

  static async find(id) {
    try {
      const query = 'SELECT * FROM quiz_questions WHERE id = ?';
      const { rows: [quiz_question] } = await knex.raw(query, [id]);
      return quiz_question ? new QuizQuestions(quiz_question) : null;
    } catch(error) {
      console.log(error);
      return null;
    }
  }

  static async create(question, answer, wrong_answer_1, wrong_answer_2, wrong_answer_3, quiz_id) {
    console.log("quzzes", question, answer, wrong_answer_1, wrong_answer_2, wrong_answer_3, quiz_id)
    try {
      const query = `
        INSERT INTO quiz_questions (question, answer, wrong_answer_1, wrong_answer_2, wrong_answer_3, quiz_id)
        VALUES (?, ?, ?, ?, ?, ?)
        RETURNING *
      `;
  
      const [quiz_question] = await knex.raw(query, [question, answer, wrong_answer_1, wrong_answer_2, wrong_answer_3, quiz_id]);
      return new QuizQuestions(quiz_question);
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

module.exports = QuizQuestions;
