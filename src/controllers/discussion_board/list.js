const listDiscussionBoard = async (req, res) => {
    const { 
      db: {DiscussionBoard} // this req.db.User property is put here by the addModelsToRequest middleware
    } = req; 
  
    const list = await DiscussionBoard.list();
    res.send(list);
  };
  
  module.exports = listDiscussionBoard;
  