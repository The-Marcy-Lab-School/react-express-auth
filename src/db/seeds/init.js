const User = require('../models/user');
const Quizzes = require('../models/quizzes')
 const QuizQuestions  = require('../models/question')
const Chatbox= require('../models/chatbox')

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await User.deleteAll();
  await User.create('cool_cat', '1234');
  await User.create('l33t-guy', '1234');
  await User.create('wowow', '1234');

  //  await Quizzes.create('wowow');
  await Quizzes.create('French');

  // //  await QuizQuestions.create('uyowow','T','YU','FG','GH',1);
  // await QuizQuestions.create('testing quiz','T','YU','FG','GH',1,3);
  // await QuizQuestions.create('testing quiz','T','YU','FG','GH',1,3);

  // //Chatbox input
  // await Chatbox.create(10,"test","test");
};

// exports.seed = async (knex) => {
//   await Quizzes.create('wowow');
//   await Quizzes.create('jijinwowow');
// };


// exports.seed = async (knex) => {
//   await QuizQuestions.create('uyowow','T','YU','FG','GH',1);
//   await QuizQuestions.create('testing quiz','T','YU','FG','GH',1);
//   //await Quizzes.create('jijinwowow');
// };

// // exports.seed = async (knex) => {
// //   await QuizAttempts.create(1,1,1,1);
// //   // await Quizzes.create('jijinwowow');
// // };
