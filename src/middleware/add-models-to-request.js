const User = require('../db/models/user');
const Post = require('../db/models/post');
const Comment = require('../db/models/comment');

// add Like model 

const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Post,
    Comment,
    // add Like model,
    
  };
  next();
};

module.exports = addModelsToRequest;
