const createPost = async (req, res) => {
    const {
      session,
      db: { Post },
      body: { title, content, url, user_id }, 
    } = req;


    const post = await Post.create(title, content, url, user_id);
    session.userId = user.id;
  
    res.send(post);
  };
  
  module.exports = createPost;