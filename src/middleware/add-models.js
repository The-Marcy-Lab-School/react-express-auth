const User = require('../db/models/user');
const Reviews = require('../db/models/review')

const addModels = (req, res, next) => {
  req.db = {
    User,
    Reviews,
  };
  next();
};

module.exports = addModels;
