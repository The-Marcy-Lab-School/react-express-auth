const User = require('../db/models/user');
const Grocery_list = require('../db/models/grocery_list')
const Items = require('../db/models/items');

const addModels = (req, res, next) => {
  req.db = {
    User,
    Grocery_list,
    Items
  };
  next();
};

module.exports = addModels;
