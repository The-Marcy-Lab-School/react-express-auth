const listPostLikes = async (req, res) => {
    const { 
      db: { Like }
    } = req; 
  
    const like = await Like.postLikes(req.params.post_id);
    res.send(like);
  };
  
  module.exports = listPostLikes;  
