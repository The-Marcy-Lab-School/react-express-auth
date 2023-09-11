const knex = require('../knex');

class Replies {

//   constructor({ userid, ai_response, user_response}) {
//     this.userid = userid;
//     this.ai_response = ai_response;
//     this.user_response = user_response;
//   }

 

  static async create(username, commentid, text) {
   // console.log("replies",username,commentid, text)
    try {
      const query = `
        INSERT INTO replies (username, commentid,text)
        VALUES (?, ?, ?)
        RETURNING *
      `;
      
      const { rows: [reply] }  = await knex.raw(query, [username, commentid, text]);
     // console.log("chats created by model for comments", comments)
      return new reply;
    } catch(error) {
      console.log(error);
      return null;
    }
  }
  

  static async find(id) {
   // console.log("chats found by id number", id)
    try {
      const query = 'SELECT * FROM comments WHERE discussion_board_id = ?';
      const { rows } = await knex.raw(query, [id]);
      
      console.log("chats found by id by model for comments", rows)
      return rows;
      //new Chatbox(chats);

    } catch(error) {
      console.log(error);
      return null;
    }
  }

  static async list() {
    try {
      const query = 'SELECT * FROM replies';
      const { rows } = await knex.raw(query);
    //   console.log("list replies",rows)
      return rows;
    } catch(error) {
      console.log(error);
      return [];
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
//   const attempt = await Comments.create("testing to comment",2,1); // Corrected method call
//   console.log("test comments model",attempt);
// };
// test();

module.exports = Replies;
