const listPosts = async (req, res) => {
  const { 
    db: { Post } // this req.db.Post property is put here by the addModelsToRequest middleware
  } = req; 

  const post = await Post.listAll();
  res.send(posts);
};

module.exports = listPosts;
