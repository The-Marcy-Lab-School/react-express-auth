const createPost = async (req, res) => {
    const {
      session, // this req.session property is put here by the handleCookieSessions middleware
      db: { Post }, // this req.db.User property is put here by the addModelsToRequest middleware
      body: { user_id, title }, // this req.body property is put here by the client
    } = req;
  
    const post = await Post.create(user_id, title);
    session.postId = post.id;
  
    res.send(post);
  };
  
  module.exports = createPost;