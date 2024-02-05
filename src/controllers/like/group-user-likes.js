const listUserLikes = async (req, res) => {
    const { 
      db: { Like }
    } = req; 
  
    const like = await Like.postLikes(req.params.user_id);
    res.send(like);
  };
  
  module.exports = listUserLikes;

  