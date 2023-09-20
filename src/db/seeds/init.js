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

  //  await Quizzes.create('wowow');
  await Quizzes.create('French');
  await Quizzes.create('Spanish')

   await QuizQuestions.create('What does is Bonjour in French ','Hello','Goodbye','Why','French',1,1);
  await QuizQuestions.create('What is one in spanish','Uno','Dos','Five','Si',1,1);
  // await QuizQuestions.create('testing quiz','T','YU','FG','GH',1,3);

  // //Chatbox input
  // await Chatbox.create(10,"test","test");

await QuizQuestions.create('What does "Bonjour" mean in French?', 'Hello', 'Goodbye', 'Why', 'French', 2, 1);
await QuizQuestions.create('How do you say "Thank you" in French?', 'Merci', 'Bonjour', 'Oui', 'Non', 2, 1);
await QuizQuestions.create('What is the capital of France?', 'Paris', 'Madrid', 'Berlin', 'London', 2, 1);


   // //Lessons input
  await Lessons.create("lessons 1",1,1);
  await Lessons.create("lessons 2",2,2);

  await Lessons.create("lessons 1",2,1);
  await Lessons.create("lessons 2",2,2);


  await DiscussionBoard.create("Why Spanish?","Honestly im the omnly one that literall Love spanish ","john");
  await DiscussionBoard.create("Uunderstanding Grammar For French","Im a bit confused about how I should structure things in French","stacey");
  await DiscussionBoard.create("Uunderstanding Grammar For French","Im a bit confused about how I should structure things in japanese","mist");
  await DiscussionBoard.create("Learning Chinese Characters","Can anyone recommend a good method for learning Chinese characters effectively?","sarah");
  await DiscussionBoard.create("French Pronunciation Help","I'm having trouble with French pronunciation. Any tips or resources?","michael");
  await DiscussionBoard.create("Italian Verb Conjugation","Italian verb conjugation seems challenging. How can I improve my skills?","olivia");
  await DiscussionBoard.create("Japanese Kanji Mastery","What's the best way to master Japanese Kanji characters?","sam");
  await DiscussionBoard.create("German Grammar Questions","I have some questions about German grammar rules. Can someone help?","emily");

  //Comments Seeds
  await Lessons.create("testing comment insertion",14,1);
  await QuizAttempts.create(1,1,30,1);

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
