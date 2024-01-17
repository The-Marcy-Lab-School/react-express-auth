const listUsers = async (req, res) => {
  const {
    db: { User }, // this req.db.User property is put here by the addModelsToRequest middleware
  } = req;

  const users = await User.list();
  res.send(users);
};

module.exports = listUsers;
