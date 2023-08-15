const express = require('express');
const PostsController = require('./controllers/Posts');
const addModelsToRequest = require('./middleware/add-models-to-request');
const checkAuthentication = require('./middleware/check-authentication');

const PostRouter = express.Router();
PostRouter.use(addModelsToRequest);

PostRouter.post("/createPost", PostsController.create) 

// {
//     "Description": "Hello this is a des",
//     "img_url": "testurl",
//     "Owner_id": 1,
//     "Address": "123 Gucci St",
//     "Category": "food"
// }


PostRouter.get("/listPost", PostsController.list)
PostRouter.delete("/deletePost/:id", PostsController.deletePost)
PostRouter.get("/listPost/:id", PostsController.show)


module.exports = PostRouter;