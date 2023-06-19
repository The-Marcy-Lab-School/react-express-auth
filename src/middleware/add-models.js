const User = require('../db/models/user');
const Friends = require('../db/models/friends');
const Event = require('../db/models/event');

const addModels = (req, res, next) => {
  req.db = {
    User,
    Friends,
    Event
  };
  next();
};

module.exports = addModels;
