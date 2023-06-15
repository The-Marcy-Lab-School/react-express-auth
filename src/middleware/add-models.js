const User = require('../db/models/user');
const Event = require("../db/models/event");
const User_Event = require('../db/models/user_event');

const addModels = (req, res, next) => {
  req.db = {
    User,
    Event,
    User_Event,
  };
  next();
};

module.exports = addModels;
