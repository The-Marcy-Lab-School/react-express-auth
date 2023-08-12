const User = require('../db/models/user');
const  Quizzes = require('../db/models/quizzes');
<<<<<<< HEAD
const QuizAttempts = require('../db/models/questions_attempts')
=======
const Quiz_Questions = require('../db/models/quiz_question')
>>>>>>> duojay

const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Quizzes,
<<<<<<< HEAD
    QuizAttempts,
=======
    Quiz_Questions,
>>>>>>> duojay
  };
  next();
};

module.exports = addModelsToRequest;
