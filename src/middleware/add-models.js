const User = require('../db/models/user');
const Friends = require('../db/models/friends');

const addModels = (req, res, next) => {
  req.db = {
    User,
    Friends,
  };
  next();
};

module.exports = addModels;
