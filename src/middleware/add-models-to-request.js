const User = require('../db/models/user');

const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
  };
  next();
};

module.exports = addModelsToRequest;
