const deletePost = async (req, res) => {
    const {
      db: { Post },
      params: { post_id },
    } = req;
  
    const post = await User.find(post_id);
    if (post) {
      await Post.delete(post_id);
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  };
  
  module.exports = deletePost;