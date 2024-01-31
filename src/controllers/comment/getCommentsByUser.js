const getCommentsByUser = async (req, res) => {
    const { 
      db: { Comment }, // this req.db.User property is put here by the addModelsToRequest middleware
      params : {userId}
    } = req; 
    console.log("ok", userId)
  
    const comments = await Comment.commentsByUser(userId);
    res.send(comments);
  };
  
  module.exports = getCommentsByUser;