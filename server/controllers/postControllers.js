const { isAuthorized } = require('../utils/auth-utils');
const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  const { title, body, id } = req.body;

  const post = await Post.create(title, body, id);

  res.send(post);
};

exports.updatePost = async (req, res) => {
    const {postId, body , title} = req.body

}