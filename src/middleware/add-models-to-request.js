const User = require('../db/models/user');
const Post = require('../db/models/post');
const Comment = require('../db/models/comment');
const Likes = require('../db/models/like');

const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Post,
    Comment,
    
  };
  next();
};

module.exports = addModelsToRequest;
