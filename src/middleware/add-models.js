const User = require('../db/models/user');
const Post = require('../db/models/post')
const Events = require('../db/models/events')

const addModels = (req, res, next) => {
  req.db = {
    User,
    Post,
    Events,
  };
  next();
};

module.exports = addModels;
