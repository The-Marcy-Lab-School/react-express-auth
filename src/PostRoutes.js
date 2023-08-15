const express = require('express');
const PostsController = require('./controllers/Posts');
const addModelsToRequest = require('./middleware/add-models-to-request');
const checkAuthentication = require('./middleware/check-authentication');

const PostRouter = express.Router();
PostRouter.use(addModelsToRequest);

PostRouter.post("./createPost", PostsController.create) 
PostRouter.get("./listPost", PostsController.list)
PostRouter.delete("./deletePost", PostsController.deletePost)


module.exports = PostRouter;