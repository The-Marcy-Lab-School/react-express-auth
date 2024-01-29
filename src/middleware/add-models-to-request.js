const User = require('../db/models/user');
const Event = require('../db/models/event');
const Comment = require('../db/models/comment');
const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Event,
    Comment,
  };
  next();
};

module.exports = addModelsToRequest;
