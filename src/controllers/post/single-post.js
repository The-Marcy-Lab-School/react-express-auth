const showOnePost = async (req, res) => {
    const {
      db: { Post }, // this req.db.User property is put here by the addModelsToRequest middleware
      params: { id }, // this req.params.id is a part of the request URL
    } = req;
  
    const post = await Post.find(id);
    if (!post) return res.sendStatus(404);
  
    res.send(post);
  };
  
  module.exports = showOnePost;
  