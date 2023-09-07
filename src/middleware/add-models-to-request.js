const User = require('../db/models/user');
const  Quizzes = require('../db/models/quizzes');
const  Questions = require('../db/models/question');
const QuizAttempts = require('../db/models/questionsAttempts');
// const Quiz_Questions = require('../db/models/quiz_question')

const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Quizzes,
    Questions,
    QuizAttempts,
  };
  next();
};

module.exports = addModelsToRequest;
