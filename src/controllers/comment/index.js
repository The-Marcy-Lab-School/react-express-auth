
const create = require('./create');
const list = require('./list')
const showPostComments = require('./list-post-comments')
const showUserComments = require('./list-user-comments');
const remove = require('./delete')

module.exports = {
    create,
    list,
    showPostComments,
    showUserComments,
    remove,
}