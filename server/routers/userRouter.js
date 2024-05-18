const express = require('express');
const userControllers = require('../controllers/userControllers');
const postControllers = require('../controllers/postControllers');
const checkAuthentication = require('../middleware/checkAuthentication');

const userRouter = express.Router();

userRouter.post('/:user_id/posts', postControllers.createPost);
userRouter.get('/:user_id/posts', postControllers.getPostsByUserId);
userRouter.delete('/:user_id/posts/:post_id', postControllers.deletePost);
userRouter.delete('/:user_id/posts', postControllers.deleteAllPostsByUser);
userRouter.get('/posts', postControllers.getAllPosts);


userRouter.post('/', userControllers.createUser);

// These actions require users to be logged in (authentication)
// Express lets us pass a piece of middleware to run for a specific endpoint
userRouter.get('/', checkAuthentication, userControllers.listUsers);
userRouter.get('/:id', checkAuthentication, userControllers.showUser);
userRouter.patch('/:id', checkAuthentication, userControllers.updateUser);


module.exports = userRouter;
