const findUser = async (req, res) => {
  const {
    session,
    db: { User },
    params: { username },
  } = req;
  
    const user = await User.findByUsername(username);
    res.send(user);
  };
  
  module.exports = findUser;