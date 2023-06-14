const User = require('../db/models/user');
const Post = require('../db/models/post')
const Volunteer = require('../db/models/volunteer')

const addModels = (req, res, next) => {
  req.db = {
    User,
    Post,
    Volunteer
  };
  next();
};

module.exports = addModels;
