const User = require('../db/models/user');
const Page = require('../db/models/page');
const Tag = require('../db/models/Tag');

const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Page,
    Tag,
  };
  next();
};

module.exports = addModelsToRequest;
