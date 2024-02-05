const User = require('../db/models/user');
const Logs = require('../db/models/logs');

const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Logs
  };
  next();
};

module.exports = addModelsToRequest;
