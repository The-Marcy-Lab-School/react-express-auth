const User = require('../db/models/user');
const Susu = require('../db/models/susu');
const Invitation = require('../db/models/invitation');

const addModels = (req, res, next) => {
  req.db = {
    User,
    Susu,
    Invitation
  };
  next();
};

module.exports = addModels;
