const createLike = async (req, res) => {
    const {
    db: { Like },
    params: { post_id, user_id },
    body: { likes_amount },
    } = req;

    const like = await Like.addLike(post_id, user_id, likes_amount);
  
    res.send(like);

  };
  
  module.exports = createLike;