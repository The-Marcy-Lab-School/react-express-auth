const User = require('../db/models/user');
const  Quizzes = require('../db/models/quizzes');
const  Questions = require('../db/models/question');
const Chatbox = require('../db/models/chatbox')
//const Quiz_Questions = require('../db/models/quiz_question')

const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Quizzes,
    Questions,
    Chatbox,
  };
  next();
};

module.exports = addModelsToRequest;
