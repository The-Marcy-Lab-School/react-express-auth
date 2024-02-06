const User = require('../db/models/user');
const Post = require('../db/models/post');
const Like = require('../db/models/like');
const Comment = require('../db/models/comment');

const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Post,
    Comment,
    Like,
    
  };
  next();
};

module.exports = addModelsToRequest;
