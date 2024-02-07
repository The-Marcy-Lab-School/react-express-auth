const listPostLikes = async (req, res) => {
    const { 
      db: { Like },
      params: {post_id}
    } = req; 
  
    const like = await Like.postLikes(post_id);
    res.send(like);
  };
  
  module.exports = listPostLikes;  
