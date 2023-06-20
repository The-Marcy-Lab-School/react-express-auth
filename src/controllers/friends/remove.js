const deleteFriend = async (req, res) => {
    const {
      session : {userId},
      db: { Friends },
      body: { friendUserName },
    } = req;
  
    
    const friend = await Friends.delete( friendUserName, userId);
    if(!friend) return res.sendStatus(404)
  
    return res.send(200);
  };
  
  module.exports = deleteFriend;