const knex = require('../knex');

class Lessons {

    // constructor({ id, level_id, quiz_id }) {
    //     this.id = id;
    //     this.level_id = level_id;
    //     this.quiz_id = quiz_id;
    // }
    
    static async list() {
        try {
          const query = 'SELECT * FROM lessons';
          const { rows } = await knex.raw(query);
          console.log("model list quiz" + rows.map((lessonss) => new Questions(quizzes)))
          return rows
          //.map((quizzes) => new Quizzes(quizzes));
        } catch(error) {
          console.log(error);
          return null;
        }
      }

      static async find(id) {
        console.log("lessons id", id)
        try {
          const query = 'SELECT * FROM lessons WHERE quiz_id = ?';
          const { rows} = await knex.raw(query, [id]);
          console.log("question find rows" + rows)
          return rows
        } catch(error) {
          console.log(error);
          return null;
        }
      }
    
    
    
  

    static async create(lessons, quiz_id, level_id) {
        console.log("lessons info in model", lessons, quiz_id, level_id)
        try {
            const query = `
                INSERT INTO lessons (lessons, quiz_id, level_id)
                VALUES (?,?,?)
                RETURNING *
            `;
            const { rows } = await knex.raw(query, [lessons, quiz_id, level_id]);
            return rows.map((lesson) => new Lessons(lesson));
        } catch(error) {
            console.log(error);
            return null;
        }
    }

    static async deleteAll() {
        try {
            return knex('lessons').del();
        } catch(error) {
            console.log(error);
            return null;
        }
    }
}

module.exports = Lessons;
