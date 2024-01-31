const createPost = async (req, res) => {
    const {
    db: { Post }, // this req.db.User property is put here by the addModelsToRequest middleware
    body: { id, user_id, title, description, location, image }, // this req.body property is put here by the client
    } = req;

    const post = await Post.createPost(id, user_id, title, description, location, image);
    session.userId = user.id;
  
    res.send(post);
  };
  
  module.exports = createPost;
  