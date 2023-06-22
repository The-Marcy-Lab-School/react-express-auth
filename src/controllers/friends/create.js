const createFriend = async (req, res) => {
    const {
      session : {userId},
      db: { Friends },
      body : {friendId},
    } = req;
    console.log(friendId, userId)
    const friend = await Friends.create(userId, friendId)
    if(!friend) return res.sendStatus(404)
    res.send(friend)
  };
  
  module.exports = createFriend;