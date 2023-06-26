const deleteFriend = async (req, res) => {
    const {
      session : {userId},
      db: { Friends },
      body: { friendId },
    } = req;
  console.log(userId, friendId)
    
    const friend = await Friends.delete(userId, friendId);
    if(!friend) return res.sendStatus(404)
  
    return res.json("Friend Deleted!");
  };
  
  module.exports = deleteFriend;