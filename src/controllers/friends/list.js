const listFriends = async (req, res) => {
    const { 
        session: {userId},
        db : {Friends} 
    } = req;
        
    const friends = await Friends.list(userId);
    res.send(friends);
  };
  
  module.exports = listFriends;