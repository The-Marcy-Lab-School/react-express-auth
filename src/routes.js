const express = require('express');
const userController = require('./controllers/user');
const friendsController = require('./controllers/friends');
const eventsController = require('./controllers/event');
const commentsController = require('./controllers/comments');
const pingsController = require ('./controllers/pings')
const addModels = require('./middleware/add-models');
const checkAuthentication = require('./middleware/check-authentication');

const Router = express.Router();
Router.use(addModels);

Router.post('/pings', checkAuthentication, pingsController.create)
Router.get('/pings/:id', checkAuthentication, pingsController.list)
Router.patch("/pings/:id", checkAuthentication, pingsController.update)

// COMMENTS ROUTES
Router.post('/userscomment', commentsController.create);
Router.get('/userscomment', commentsController.list);
Router.delete('/userscomment', commentsController.destroy);
Router.patch('/userscomment', commentsController.update);

Router.get('/users', userController.list);
Router.post('/users', userController.create);
Router.get('/users/:id', userController.show);
// We can use middleware slotted in between the route and the controller as well
Router.patch('/users/:id', checkAuthentication, userController.update);
Router.patch('/users', userController.updateSafe)

Router.post('/friends', checkAuthentication, friendsController.create);
Router.delete('/friends', checkAuthentication, friendsController.remove);
Router.get('/friends', checkAuthentication, friendsController.list);

Router.get('/events', eventsController.list);


/*
Ask Zo send you the npm fetch stuff
Ask Trevon to give you the code for fetching from the API
Check in with Raven and ask how I should structure the information I send back to the front end

*/

Router.post('/login', userController.login);
Router.delete('/logout', userController.logout);
Router.get('/me', userController.showMe);

Router.get('/logged-in-secret', checkAuthentication, (req, res) => {
  res.send({ msg: 'The secret is: there is no secret.' });
});

module.exports = Router;
