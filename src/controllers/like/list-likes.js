const listLikes = async (req, res) => {
    const { 
      db: { Like } // this req.db.User property is put here by the addModelsToRequest middleware
    } = req; 
  
    const like = await Like.getAllLikes();
    res.send(like);
  };
  
  module.exports = listLikes; 