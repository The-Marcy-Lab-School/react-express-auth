const User = require('../db/models/user');
const Friends = require('../db/models/friends');
const Event = require('../db/models/event');
const Comment = require('../db/models/comment');

const addModels = (req, res, next) => {
  req.db = {
    User,
    Friends,
    Event,
    Comment,
  };
  next();
};

module.exports = addModels;
