const User = require('../db/models/user');
const Logs = require('../db/models/logs');
const Entry = require('../db/models/entry')

const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Logs,
    Entry
  };
  next();
};

module.exports = addModelsToRequest;
