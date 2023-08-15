const express = require('express');
// const userController = require('./controllers/user');
const addModelsToRequest = require('./middleware/add-models-to-request');
const checkAuthentication = require('./middleware/check-authentication');

const PostRouter = express.Router();
PostRouter.use(addModelsToRequest);

PostRouter.post("./createPost", ) 

module.exports = PostRouter;