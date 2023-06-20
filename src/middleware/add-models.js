const User = require("../db/models/user");
const Reviews = require("../db/models/review");
const Pages = require("../db/models/pages");
const addModels = (req, res, next) => {
  req.db = {
    User,
    Reviews,
    Pages,
  };
  next();
};

module.exports = addModels;
