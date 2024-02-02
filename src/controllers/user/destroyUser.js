const destroyUser = async (req, res) => {
  const {
    db: { User },
    params: { id },
  } = req;

  const user = await User.destroyUser(id);

  res.sendStatus(user ? 204 : 404);
};

module.exports = destroyUser;
