const User = require('../db/models/user');
const Post = require('../db/models/post')
const Events = require('../db/models/events')
const Volunteer = require('../db/models/volunteer')

const addModels = (req, res, next) => {
  req.db = {
    User,
    Post,
    Events,
    Volunteer
  };
  next();
};

module.exports = addModels;
