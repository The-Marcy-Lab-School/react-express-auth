const express = require('express');
const LikesController = require('./controllers/Likes');
const addModelsToRequest = require('./middleware/add-models-to-request');
const checkAuthentication = require('./middleware/check-authentication');

const LikesRouter = express.Router();
LikesRouter.use(addModelsToRequest);

LikesRouter.get('/likes', LikesController)
LikesRouter.post('/likedPost', LikesController.liked)
LikesRouter.delete('/unLiked', LikesController.unliked)


module.exports = LikesRouter;