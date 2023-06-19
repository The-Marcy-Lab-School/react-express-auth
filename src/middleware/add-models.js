const User = require('../db/models/user');
const Event = require("../db/models/event");
const UserEvent = require('../db/models/user_event');

const addModels = (req, res, next) => {
  req.db = {
    User,
    Event,
    UserEvent,
  };
  next();
};

module.exports = addModels;
