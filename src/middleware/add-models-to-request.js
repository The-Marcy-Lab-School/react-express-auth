const User = require('../db/models/user');
const Post = require('../db/models/Post')
const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Post,
  };
  next();
};

module.exports = addModelsToRequest;
