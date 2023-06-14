const showUser = async (req, res) => {
  const {
    db: { User },
    params: { id },
  } = req;

  if (!Number.isInteger(parseInt(id))) return res.sendStatus(404);
  const user = await User.find(id);
  if (!user) return res.sendStatus(404);

  res.send(user);
};

module.exports = showUser;
