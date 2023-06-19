const createFriend = async (req, res) => {
    const {
      session : {userId},
      db: { Friends },
      body : {friendId},
    } = req;

    const friend = await Friends.create(userId, friendId)
    if(!friend) return res.sendStatus(404)
    res.sendStatus(202);
  };
  
  module.exports = createFriend;