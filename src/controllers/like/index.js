const create = require('./create-like');
const remove = require('./delete-like');
const postLikes = require('./post-likes');
const userLikes = require('./user-likes');

module.exports = {
    create,
    remove,
    postLikes,
    userLikes
};
