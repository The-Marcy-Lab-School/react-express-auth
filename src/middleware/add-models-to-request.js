const User = require('../db/models/user');
const  Quizzes = require('../db/models/quizzes');
const  Questions = require('../db/models/questions');
const Chatbox = require('../db/models/chatbox')
const Lessons = require('../db/models/lessons')

const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Quizzes,
    Questions,
    Chatbox,
    Lessons,
  };
  next();
};

module.exports = addModelsToRequest;
