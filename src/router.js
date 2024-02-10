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
Router.get('/users', userController.list); // shows a list of ALL users 
Router.post('/users', userController.create); // creates a user 
Router.get('/users/:id', userController.show); // gets a singular user 
Router.delete('/users/:id', userController.remove); // deletes a user by the id 
Router.post('/login', userController.login); // login route 
Router.delete('/logout', userController.logout); // sign out of cookie session 
Router.get('/me', userController.showMe); // shows user profile page 

//comment routes
Router.post('/users/:user_id/posts/:post_id/comments', commentController.create); // creates a comment on a post 
Router.get('/comments', commentController.list); // shows all comments without being signed in
Router.get('/comments/:post_id', commentController.showPostComments); // shows all comments of a post
Router.get('/users/:user_id/mycomments', commentController.showUserComments); // shows a user's comment's they made on posts
Router.delete('/users/:user_id/posts/:post_id/comments/:id', commentController.remove); // deletes a comment from the post 

//post routes
Router.get('/posts', postController.showAllPosts); // shows all the posts without being signed in 
Router.get('/posts/:id', postController.showASinglePost); // shows a single post without being signed in 
Router.get('/users/:user_id/myposts', postController.showAllUserPosts); // shows all user's posts 
Router.post('/users/:user_id/posts', postController.create); // creates a post for a user logged in
Router.delete('/users/:user_id/posts/:id', postController.remove); // deletes a user's post 
Router.patch('/users/:user_id/posts/:id', postController.update); // updates a user's post

//likes routes
Router.post('/users/:user_id/posts/:post_id/likes', likesController.create);  // creates a like for that post by that user logged in
Router.delete('/users/:user_id/posts/:post_id/likes/:id', likesController.remove);   // deletes the like by the user 
Router.get('/users/:user_id/posts/:post_id/all', likesController.listLikes); // shows all the likes created in the likes table  
Router.get('/posts/:post_id/likes', likesController.totalPostLikes); // shows the total number of likes for a post 
Router.get('/users/:user_id/userlikes', likesController.listUserPostLikes) // shows the posts a user has liked 

// These actions require authentication (only valid logged in users can do these things)
// The checkAuthentication middleware will only run for these specified routes.
Router.patch('/users/:id', checkAuthentication, userController.update); // updates a user's bio, username, and image 
Router.get('/logged-in-secret', checkAuthentication, (req, res) => {
  res.send({ msg: 'The secret is: there is no secret.' });
});

module.exports = Router;