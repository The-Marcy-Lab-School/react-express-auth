const User = require('../db/models/user');
const Susu = require('../db/models/susu')

const addModels = (req, res, next) => {
  req.db = {
    User,
    Susu
  };
  next();
};

module.exports = addModels;
