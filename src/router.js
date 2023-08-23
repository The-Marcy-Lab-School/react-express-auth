const express = require('express');
const userController = require('./controllers/user');
const addModelsToRequest = require('./middleware/add-models-to-request');
const checkAuthentication = require('./middleware/check-authentication');

//responsilbe for calling on the quiz  controller
const quizController = require('./controllers/quiz_topics')
const questionController = require('./controllers/questions')
const chatboxController = require('./controllers/chatbox')




const Router = express.Router();
Router.use(addModelsToRequest);

Router.get('/users', userController.list);
Router.post('/users', userController.create);
Router.get('/users/:id', userController.show);

Router.post('/login', userController.login);
Router.delete('/logout', userController.logout);
Router.get('/me', userController.showMe);

//routes for quiizes
Router.post('/quiz', quizController.create)
Router.get('/q', quizController.list)

Router.get('/questions', questionController.list)
///qiestion routes
//Router.get('/questions', questionsController.list);


/////ROUTES FOR A.I
Router.post('/insertMessage', chatboxController.create)
Router.get('/gettMessages', chatboxController.find)

// These actions require authentication (only valid logged in users can do these things)
// The checkAuthentication middleware will only run for these specified routes.
Router.patch('/users/:id', checkAuthentication, userController.update);
Router.get('/logged-in-secret', checkAuthentication, (req, res) => {
  res.send({ msg: 'The secret is: there is no secret.' });
});



module.exports = Router;
