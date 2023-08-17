const User = require('../models/user');
const Quizzes = require('../models/quizzes')
const QuizQuestions  = require('../models/quiz_question')
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

  await Quizzes.create('Spainsh');
  await Quizzes.create('French');

  await QuizQuestions.create(
    'What is "hello" in Spanish?', 'hola', 'adiós', 'gracias', 'por favor', 1
  );
  await QuizQuestions.create(
    'What is "goodbye" in Spanish?', 'adiós', 'hola', 'gracias', 'por favor', 1
  );
  await QuizQuestions.create(
    'What is "thank you" in Spanish?', 'gracias', 'hola', 'adiós', 'por favor', 1
  );

};


// // exports.seed = async (knex) => {
// //   await QuizAttempts.create(1,1,1,1);
// //   // await Quizzes.create('jijinwowow');
// // };
