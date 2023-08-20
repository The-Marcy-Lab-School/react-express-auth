const knex = require('../knex');

class Quizzes {

  constructor({ id, topic }) {
    this.id = id;
    this.topic = topic;
  }

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


  // static async list() {
  //   const query = 'SELECT * FROM users';
  //   const { rows } = await knex.raw(query);
  //   return rows.map((user) => new User(user));
  // }
  static async find(id) {
    try {
      const query = 'SELECT * FROM quizzes WHERE id = ?';
      const { rows: [quizzes] } = await knex.raw(query, [id]);
      return quizzes ? new Quizzes(quizzes) : null;
    } catch(error) {
      console.log(error);
      return null;
    }
  }


  static async create(topic) {
    console.log("topics:" + topic);
    try {
        const query = `
            INSERT INTO quizzes (topic)
            VALUES (?) RETURNING *
        `;
        const { rows: [quizzes] }= await knex.raw(query, [topic]);
        return new Quizzes(quizzes);
    } catch (error) {
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


module.exports = Quizzes;