const deleteFriend = async (req, res) => {
    const {
      session : {userId},
      db: { Friends },
      body: { friendId },
    } = req;
  
    
    const friend = await Friends.delete( friendId, userId);
    if(!friend) return res.sendStatus(404)
  
    return res.send(200);
  };
  
  module.exports = deleteFriend;