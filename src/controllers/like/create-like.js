const createLike = async (req, res) => {
    const {
    db: { Like },
    params: { post_id, user_id },
    body: { likes_amount },
    } = req;

    const like = await Like.createPost(post_id, user_id, likes_amount);
    session.userId = user.id; // what is this doing ? 
  
    res.send(like);

  };
  
  module.exports = createLike;