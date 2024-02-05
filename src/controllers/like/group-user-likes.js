const listUserLikes = async (req, res) => {
    const { 
      db: { Like },
      params : { user_id }
    } = req; 
  
    const like = await Like.userLikes(user_id);
    res.send(like);
  };
  
  module.exports = listUserLikes;

  