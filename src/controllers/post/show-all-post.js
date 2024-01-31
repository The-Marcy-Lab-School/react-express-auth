const listPosts = async (req, res) => {
    const { 
      db: { Post } // this req.db.User property is put here by the addModelsToRequest middleware
    } = req; 
  
    const posts = await Post.listAllPost();
    res.send(posts);
  };
  
  module.exports = listPosts;  