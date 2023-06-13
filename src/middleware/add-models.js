const User = require('../db/models/user');

const addModels = (req, res, next) => {
  req.db = {
    User,
    Post,
  };
  next();
};

module.exports = addModels;
