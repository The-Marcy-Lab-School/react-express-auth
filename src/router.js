const express = require('express');
const userController = require('./controllers/user');
const addModelsToRequest = require('./middleware/add-models-to-request');
const checkAuthentication = require('./middleware/check-authentication');

//responsilbe for calling on the quiz  controller
const quizTopicsController = require('./controllers/quiz_topics')

//QUESTIONS CONTROLLER
const questionController = require('./controllers/questions')

//ROUTES FOR AI
const chatboxController = require('./controllers/chatbox')

//ROUTES FOR GETTING LESSONS
const lessonsController = require('./controllers/lessons')


const Router = express.Router();
Router.use(addModelsToRequest);

Router.get('/users', userController.list);
Router.post('/users', userController.create);
Router.get('/users/:id', userController.show);

Router.post('/login', userController.login);
Router.delete('/logout', userController.logout);
Router.get('/me', userController.showMe);

//Routes For Quiz Topics
Router.post('/quiz', quizTopicsController.create)
Router.get('/q', quizTopicsController.list)


//ROUTES FOR QUIZ QUESTIONS 
Router.get('/questions', questionController.list)
Router.get('/lessons-quizzes/:id', questionController.find)
///qiestion routes
//Router.get('/questions', questionsController.list);


/////ROUTES FOR A.I
Router.post('/insertMessage', chatboxController.create)
Router.get('/gettMessages', chatboxController.find)

//ROUTES FOR LESSONS 
Router.get('/lessons/:id', lessonsController.find)
Router.get('/lessons/:id', lessonsController.find)

// These actions require authentication (only valid logged in users can do these things)
// The checkAuthentication middleware will only run for these specified routes.
Router.patch('/users/:id', checkAuthentication, userController.update);
Router.get('/logged-in-secret', checkAuthentication, (req, res) => {
  res.send({ msg: 'The secret is: there is no secret.' });
});



module.exports = Router;
