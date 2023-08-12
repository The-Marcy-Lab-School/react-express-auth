const User = require('../models/user');
const Quizzes = require('../models/quizzes')
const QuizQuestions  = require('../models/quiz_question')
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await User.deleteAll();
  await User.create('cool_cat', '1234');
  await User.create('l33t-guy', '1234');
  await User.create('wowow', '1234');
};

exports.seed = async (knex) => {
  await Quizzes.create('wowow');
  await Quizzes.create('jijinwowow');
};


exports.seed = async (knex) => {
  await QuizQuestions.create('wowow','T','YU','FG','GH',7);
  //await Quizzes.create('jijinwowow');
};