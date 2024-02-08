const User = require('../db/models/user');
const Logs = require('../db/models/logs');
const Entry = require('../db/models/entry');
const Post = require('../db/models/post');
const Thread = require('../db/models/thread')

const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Logs,
    Entry,
    Post,
    Thread
  };
  next();
};

module.exports = addModelsToRequest;
