const User = require('../db/models/user');
const Friends = require('../db/models/friends');

const addModels = (req, res, next) => {
  req.db = {
    User,
  };
  next();
};

module.exports = addModels;
