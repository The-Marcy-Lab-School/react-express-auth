const User = require('../db/models/user');
const  Quizzes = require('../db/models/quizzes');
const  Questions = require('../db/models/questions');
const Chatbox = require('../db/models/chatbox')
const Lessons = require('../db/models/lessons')
const DiscussionBoard = require('../db/models/discussion_board')
const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Quizzes,
    Questions,
    Chatbox,
    Lessons,
    DiscussionBoard,
  };
  next();
};

module.exports = addModelsToRequest;
