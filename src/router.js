const express = require('express');
const userController = require('./controllers/user');
const addModelsToRequest = require('./middleware/add-models-to-request');
const checkAuthentication = require('./middleware/check-authentication');
const axios = require('axios');
//responsilbe for calling on the quiz  controller
const quizTopicsController = require('./controllers/quiz_topics')

//QUESTIONS CONTROLLER
const questionController = require('./controllers/questions')

//ROUTES FOR AI
const chatboxController = require('./controllers/chatbox')

//ROUTES FOR GETTING LESSONS
const lessonsController = require('./controllers/lessons')

//ROUTES FOR DISCUSSION BOARD
const discussionBoardController = require('./controllers/discussion_board')

//ROUTES FOR COMMENTS
const commentsController = require('./controllers/comments')

//ROUTES FOR REPLY
const repliesController = require('./controllers/replies')

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


Router.post('/discussion',discussionBoardController.create)

//COMMENTS/////////
Router.get('/comments/:id', commentsController.find);
Router.post('/comments', commentsController.create);


//REPLIES/////////
Router.post('/replies', repliesController.create);
Router.get('/get-replies', repliesController.list);



// Router.post('/authenticate', async (req, res) => {
//   const fakeUsername = 'fakeUser'; // Change this to your desired fake username
// console.log("api send")
//   try {
//     const response = await fetch('https://api.chatengine.io/users/', {
//       method: 'POST', // Change to POST
//       headers: {
//         'Content-Type': 'application/json',
//         'Private-Key': 'a2a6192c-5ee4-49e7-b3ee-d70b115f604e'
//       },
//       body: JSON.stringify({
//         username: fakeUsername,
//         secret: fakeUsername,
//         first_name: fakeUsername
//       })
//     });

//     const data = await response.json();
//     return res.status(response.status).json(data);
//   } catch (e) {
//     return res.status(e.response.status).json(e.response.data);
//   }
// });


// Router.post("/authenticate", async (req, res) => {
//   console.log("chat")
//   const { username } = req.body;
//   return res.json({ username: username, secret: "sha256..." });
//   try{
//     const r = await axios.put(
//       'https://api.chatengine.io/users/',
//       {username:username, secret:username, first_name:username},
//       {headers:{"private-key": "a2a6192c-5ee4-49e7-b3ee-d70b115f604e" }}
//     )
//       return res.status(r.status).json(r.data)
//   }catch(e) {
//     return res.status(e.response.status).json(e.response.data)
//   }
//   //return res.json({ username: username, secret: "sha256..." })
// });

// These actions require authentication (only valid logged in users can do these things)
// The checkAuthentication middleware will only run for these specified routes.
Router.patch('/users/:id', checkAuthentication, userController.update);
Router.get('/logged-in-secret', checkAuthentication, (req, res) => {
  res.send({ msg: 'The secret is: there is no secret.' });
});



module.exports = Router;
