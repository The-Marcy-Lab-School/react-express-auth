const User = require('../db/models/user');
const Post = require('../db/models/Post');
const Like = require('../db/models/Like')
const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Post,
    Like
  };
  next();
};

module.exports = addModelsToRequest;
