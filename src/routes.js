const express = require('express');
const userController = require('./controllers/user');
const eventController = require('./controllers/event');
const addModels = require('./middleware/add-models');
const checkAuthentication = require('./middleware/check-authentication');

const Router = express.Router();
Router.use(addModels);

// User routes
Router.get('/users', userController.list);
Router.get('/users/:id', userController.show);
Router.post('/users', userController.create);
Router.patch('/users/:id', checkAuthentication, userController.update);
Router.post('/login', userController.login);
Router.delete('/logout', userController.logout);
Router.get('/me', userController.showMe);

Router.get('/logged-in-secret', checkAuthentication, (req, res) => {
  res.send({ msg: 'The secret is: there is no secret.' });
});

// Event routes
Router.get("/events", eventController.list);
Router.post('/events', eventController.create);
Router.patch('/events/:id', eventController.update);
Router.delete('/events/:id', eventController.deleteEvent);

module.exports = Router;
