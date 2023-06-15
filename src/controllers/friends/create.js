const createFriend = async (req, res) => {
    const {
      session,
      params,
      db: { Friends },
      body,
    } = req;
    console.log(body)
    // // TODO: check if username is taken, what should you return?
    // const user = await User.create(username, password);
    // session.userId = user.id;
  
    res.sendStatus(200);
  };
  
  module.exports = createFriend;