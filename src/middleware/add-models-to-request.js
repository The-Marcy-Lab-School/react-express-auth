const User = require('../db/models/user');
const Task = require('../db/models/task');
const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Task
  };
  next();
};

module.exports = addModelsToRequest;
