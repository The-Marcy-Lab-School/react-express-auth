const User = require("../db/models/user");
const Reviews = require("../db/models/review");
const Pages = require("../db/models/pages");
const Bookmarks = require("../db/models/bookmark")
const addModels = (req, res, next) => {
  req.db = {
    User,
    Reviews,
    Pages,
    Bookmarks
  };
  next();
};

module.exports = addModels;
