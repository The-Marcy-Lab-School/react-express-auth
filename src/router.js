const express = require('express');
const userController = require('./controllers/user/index'); // the "/index" part of the path is technically not required here, by default, when provided with a folder, the index file will be imported
const logController = require('./controllers/logs/index');
const postController = require('./controllers/posts/index');
const threadController = require('./controllers/threads/index');
const addModelsToRequest = require('./middleware/add-models-to-request');
const checkAuthentication = require('./middleware/check-authentication');
const { router } = require('./server');

const Router = express.Router();
Router.use(addModelsToRequest);

Router.get('/threads', threadController.list);
Router.post('/threads', threadController.create);
Router.get('/threads/:id', threadController.show);

Router.get('/posts', postController.list);
Router.post('/posts', postController.create);
Router.patch('/posts/:id',postController.update)

Router.get('/posts/:id', postController.show);

Router.get('/logs', logController.list);
Router.post('/logs', logController.create);
Router.patch('/logs/:id',logController.update)

Router.get('/users', userController.list);
Router.post('/users', userController.create);
Router.get('/users/:id', userController.show);

Router.post('/login', userController.login);
Router.delete('/logout', userController.logout);
Router.get('/me', userController.showMe);

// These actions require authentication (only valid logged in users can do these things)
// The checkAuthentication middleware will only run for these specified routes.
Router.patch('/users/:id', checkAuthentication, userController.update);

Router.get('/logged-in-secret', checkAuthentication, (req, res) => {
  res.send({ msg: 'The secret is: there is no secret.' });
});

module.exports = Router;
