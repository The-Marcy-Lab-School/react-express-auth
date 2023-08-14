const createPost = async (req, res) => {
    const {
      session, // this req.session property is put here by the handleCookieSessions middleware
      db: { Post }, // this req.db.User property is put here by the addModelsToRequest middleware
      body: { username, password }, // this req.body property is put here by the client
    } = req;
  
    // TODO: check if username is taken, what should you return?
    const post = await Post.create(username, password);
    session.userId = post.id;
  
    res.send(post);
  };
  
  module.exports = createPost;