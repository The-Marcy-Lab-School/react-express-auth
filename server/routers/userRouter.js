const express = require('express');
const userControllers = require('../controllers/userControllers');
const postControllers = require('../controllers/postControllers');
const followControllers = require('../controllers/followControllers');
const likeControllers = require('../controllers/likeControllers');
const checkAuthentication = require('../middleware/checkAuthentication');

const userRouter = express.Router();


// Follows
userRouter.post('/:user_id/followers', checkAuthentication, followControllers.createFollow)
userRouter.delete('/:user_id/followers', checkAuthentication, followControllers.unFollow)
userRouter.get('/:user_id/followers', followControllers.getFollowers)
userRouter.get('/:user_id/follows', followControllers.getFollows)

// Likes
userRouter.post('/:user_id/posts/:post_id/likes', checkAuthentication, likeControllers.createLike)
userRouter.delete('/:user_id/posts/:post_id/likes', checkAuthentication, likeControllers.unLike)
userRouter.get('/:user_id/posts/:post_id/likes', likeControllers.getLikesOfPost)
userRouter.get('/:user_id/likes', likeControllers.getLikesByUser)

// Posts
userRouter.post('/:user_id/posts', checkAuthentication, postControllers.createPost);
userRouter.delete('/:user_id/posts/:post_id', checkAuthentication, postControllers.deletePost);
userRouter.delete('/:user_id/posts', checkAuthentication, postControllers.deleteAllPostsByUser);
userRouter.get('/:user_id/posts', postControllers.getPostsByUserId);
userRouter.get('/:user_id/follows/posts', postControllers.getFollowsPostsByUserId);
userRouter.get('/posts', postControllers.getAllPosts);

// These actions require users to be logged in (authentication)
// Express lets us pass a piece of middleware to run for a specific endpoint
userRouter.post('/', userControllers.createUser);
userRouter.get('/', checkAuthentication, userControllers.listUsers);
userRouter.get('/:id', checkAuthentication, userControllers.showUser);
userRouter.patch('/:id', checkAuthentication, userControllers.updateUser);

module.exports = userRouter;
