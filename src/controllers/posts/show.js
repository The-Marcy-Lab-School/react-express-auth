const showPost = async (req, res) => {
    const {
      db: { Post }, 
      params: { id }, 
    } = req;
  
    const post = await Post.find(id);
    if (!post) return res.sendStatus(404);
  
    res.send(post);
  };
  
  module.exports = showPost;
  