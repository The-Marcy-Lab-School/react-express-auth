const knex = require('../knex');

class DiscussionBoard {

//   constructor({ userid, ai_response, user_response}) {
//     this.userid = userid;
//     this.ai_response = ai_response;
//     this.user_response = user_response;
//   }

  static async list() {
    try {
      const query = 'SELECT * FROM chatbox';
      const { rows } = await knex.raw(query);
      return rows;
    } catch(error) {
      console.log(error);
      return [];
    }
  }

  static async create(topic, description,user_id) {
    console.log("cdiscussion",topic, description)
    try {
      const query = `
        INSERT INTO discussion_boards (topic, description,user_id)
        VALUES (?, ?, ?)
        RETURNING *
      `;
 
      
      const { rows: [discussion] }  = await knex.raw(query, [topic, description,user_id]);
      return new discussion;
    } catch(error) {
      console.log(error);
      return null;
    }
  }
  

  static async find(id) {
    console.log("chats found by id number", id)
    try {
      const query = 'SELECT * FROM chatbox WHERE userid = ?';
      const { rows } = await knex.raw(query, [id]);
      
      console.log("chats found by id", rows)
      return rows;
      //new Chatbox(chats);

    } catch(error) {
      console.log(error);
      return null;
    }
  }


  static async deleteAll() {
    try {
      return knex('chatbox').del();
    } catch(error) {
      console.log(error);
      return null;
    }
  }
}

// const test = async () => {
//   const attempt = await Chatbox.find(10); // Corrected method call
//   console.log("test chat model",attempt);
// };
// test();

module.exports = DiscussionBoard;
