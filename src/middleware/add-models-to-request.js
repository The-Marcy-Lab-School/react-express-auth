const User = require('../db/models/user');
const  Quizzes = require('../db/models/quizzes');

const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Quizzes,
  };
  next();
};

module.exports = addModelsToRequest;
