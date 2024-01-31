const { isAuthorized } = require('../../utils/auth-utils');

const updatePost = async (req, res) => {
  const {
    session, // this req.session property is put here by the handleCookieSessions middleware
    db: { Post }, // this req.db.User property is put here by the addModelsToRequest middleware
    body: { title, description, location, image }, // this req.body property is put here by the client
    params: { id }, // this req.params.id is a part of the request URL
  } = req;

  if (!isAuthorized(id, session)) return res.sendStatus(403);

  const post = await Post.find(id);
  if (!post) return res.sendStatus(404);

  const updatedPost = await user.updatePost(title, description, location, image);
  res.send(updatedPost);
};

module.exports = updatePost;