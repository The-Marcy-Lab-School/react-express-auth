const User = require('../db/models/user');
const Event = require('../db/models/event');
const Comment = require('../db/models/comment');
const Notification = require('../db/models/notification')
const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Event,
    Comment,
    Notification,
  };
  next();
};

module.exports = addModelsToRequest;
