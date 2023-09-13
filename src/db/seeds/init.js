const User = require('../models/user');
const Quizzes = require('../models/quizzes')
 const QuizQuestions  = require('../models/questions')
const Chatbox= require('../models/chatbox')
const Lessons = require('../models/lessons')
const DiscussionBoard = require('../models/discussion_board')
const Comments = require('../models/comments')
const QuizAttempts = require('../models/questions_attempts')
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await User.deleteAll();
  await User.create('cool_cat', '1234');
  await User.create('l33t-guy', '1234');
  await User.create('wowow', '1234');

  // //  await Quizzes.create('wowow');
  await Quizzes.create('French');
  await Quizzes.create('Spanish')

  await QuizQuestions.create('What does is Bonjour in French ','Hello','Goodbye','Why','French',1,1);
  await QuizQuestions.create('What is one in spanish','Uno','Dos','Five','Si',8,1);
  await QuizQuestions.create('testing quiz','T','YU','FG','GH',1,3);

  // // //Chatbox input
  await Chatbox.create(10,"test","test");

  //  // //Lessons input
  await Lessons.create("lessons 1",1,1);
  await Lessons.create("lessons 2",8,1);


  await DiscussionBoard.create("porque","testing to see if you do")


  // //Comments Seeds
  await Lessons.create("testing comment insertion",14,1);
  await Lessons.create("hi",2,2);

await QuizAttempts.create(7,1,35,1);

};


// // exports.seed = async (knex) => {
// //   await QuizAttempts.create(1,1,1,1);
// //   // await Quizzes.create('jijinwowow');
// // };
