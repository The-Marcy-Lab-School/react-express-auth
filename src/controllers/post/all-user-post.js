const showAllPostByUser = async (req, res) => {
    const {
      db: { Post }, // this req.db.User property is put here by the addModelsToRequest middleware
      params: { user_id }, // this req.params.id is a part of the request URL
    } = req;
  
    const post = await Post.findAllPostByUser(user_id);
    if (!post) return res.sendStatus(404);
  
    res.send(post);
  };
  
  module.exports = showAllPostByUser;
  