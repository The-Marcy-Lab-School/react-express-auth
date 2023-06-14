const User = require('../db/models/user');
const Event = require("../db/models/event");

const addModels = (req, res, next) => {
  req.db = {
    User,
    Event,
  };
  next();
};

module.exports = addModels;
