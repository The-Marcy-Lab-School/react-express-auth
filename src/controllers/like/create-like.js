const createLike = async (req, res) => {
    const {
    db: { Like },
    body: { post_id, user_id, likes_amount },
    } = req;

    const post = await Like.createPost(post_id, user_id, likes_amount);
    session.userId = user.id;
  
    res.send(like);
  };
  
  module.exports = createLike;