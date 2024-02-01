// barrel file for post 
const showAllPosts = require('./show-all-post'); // this will be used to show all posts by ALL users 
const showAllUserPosts = require('./all-user-post'); // this will show all a User's specific posts 
const showASinglePost = require('./single-post'); // this will show a single post made by ANY user
const create = require('./create-post'); // A user will be able to create their own post 
const update = require('./update-post'); // A user will be able to update their own post 
const remove = require('./delete-post') // A user will be able to delete their own post 
module.exports = {
    showAllPosts,
    showAllUserPosts,
    showASinglePost,
    create,
    update,
    remove,
};