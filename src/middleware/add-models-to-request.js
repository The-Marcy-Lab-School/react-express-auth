const User = require('../db/models/user');
const  Quizzes = require('../db/models/quizzes');
const QuizAttempts = require('../db/models/questions_attempts')

const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Quizzes,
    QuizAttempts,
  };
  next();
};

module.exports = addModelsToRequest;
