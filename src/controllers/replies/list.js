const listReplies = async (req, res) => {
    const { 
      db: {Replies } // this req.db.User property is put here by the addModelsToRequest middleware
    } = req; 
  
    const replies = await Replies.list();
    res.send(replies);
  };
  
  module.exports = listReplies;
  