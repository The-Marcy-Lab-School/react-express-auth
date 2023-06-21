const User = require('../db/models/user');
const Friends = require('../db/models/friends');
const Comment = require('../db/models/comment');

const addModels = (req, res, next) => {
  req.db = {
    User,
    Friends,
    Comment,
  };
  next();
};

module.exports = addModels;
