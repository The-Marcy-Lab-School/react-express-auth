const express = require('express');
const addModelsToRequest = require('./middleware/add-models-to-request');
const checkAuthentication = require('./middleware/check-authentication');
const userController = require('./controllers/user/index');
const commentController = require('./controllers/comment/index');
const postController = require('./controllers/post/index');
const likesController = require('./controllers/like/index');

const Router = express.Router();
Router.use(addModelsToRequest);

//users routes
Router.get('/users', userController.list);
Router.post('/users', userController.create);
Router.get('/users/:id', userController.show);
Router.delete('/users/:id', userController.remove);
Router.post('/login', userController.login);
Router.delete('/logout', userController.logout);
Router.get('/me', userController.showMe);

//comment routes
Router.post('/users/:user_id/posts/:post_id/comments', commentController.create); 
Router.get('/users/:user_id/posts/:post_id/comments', commentController.list);
Router.get('/users/:user_id/posts/:post_id/mycomments', commentController.showMe);
Router.delete('/users/:user_id/posts/:post_id/comments/:id', commentController.remove);

//post routes
Router.get('/users/:user_id/posts', postController.showAllPosts); 
Router.get('/users/:user_id/posts/:id', postController.showASinglePost);
Router.get('/users/:user_id/myposts', postController.showAllUserPosts); 
Router.post('/users/:user_id/posts', postController.create);
Router.delete('/users/:user_id/posts/:id', postController.remove);
Router.patch('/users/:user_id/posts/:id', postController.update);

//likes routes
Router.post('/users/:user_id/posts/:post_id/likes', likesController.create); // makes a like 
Router.delete('/users/:user_id/posts/:post_id/likes/:id', likesController.remove); // deletes a like 
Router.get('/users/:user_id/posts/:post_id/allLikes', likesController.listLikes); // gets ALL likes

// These actions require authentication (only valid logged in users can do these things)
// The checkAuthentication middleware will only run for these specified routes.
Router.patch('/users/:id', checkAuthentication, userController.update);
Router.get('/logged-in-secret', checkAuthentication, (req, res) => {
  res.send({ msg: 'The secret is: there is no secret.' });
});

module.exports = Router;