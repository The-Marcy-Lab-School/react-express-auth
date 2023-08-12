const User = require('../db/models/user');
const  Quizzes = require('../db/models/quizzes');
const Quiz_Questions = require('../db/models/quiz_question')

const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Quizzes,
    Quiz_Questions,
  };
  next();
};

module.exports = addModelsToRequest;
