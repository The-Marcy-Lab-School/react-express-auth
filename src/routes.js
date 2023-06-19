const express = require('express');
const userController = require('./controllers/user');
const friendsController = require('./controllers/friends');
const eventsController = require('./controllers/events');
const addModels = require('./middleware/add-models');
const checkAuthentication = require('./middleware/check-authentication');

const Router = express.Router();
Router.use(addModels);

Router.get('/users', userController.list);
Router.post('/users', userController.create);
Router.get('/users/:id', userController.show);
// We can use middleware slotted in between the route and the controller as well
Router.patch('/users/:id', checkAuthentication, userController.update);
Router.patch('/users', userController.updateSafe)

Router.post('/friends', checkAuthentication, friendsController.create);
Router.delete('/friends', checkAuthentication, friendsController.remove);
Router.get('/friends', checkAuthentication, friendsController.list);

Router.get('/events', checkAuthentication, eventsController.list);

Router.post('/login', userController.login);
Router.delete('/logout', userController.logout);
Router.get('/me', userController.showMe);

Router.get('/logged-in-secret', checkAuthentication, (req, res) => {
  res.send({ msg: 'The secret is: there is no secret.' });
});

module.exports = Router;
