const User = require('../db/models/user');
const Grocery_list = require('../db/models/grocery_list')

const addModels = (req, res, next) => {
  req.db = {
    User,
    Grocery_list,
  };
  next();
};

module.exports = addModels;
