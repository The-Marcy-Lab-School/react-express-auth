
const create = require('./create');
const list = require('./list')
const showPostComments = require('./list-post-comments')
const showMe = require('./show-me');
const remove = require('./delete')

module.exports = {
    create,
    list,
    showPostComments,
    showMe,
    remove,
}