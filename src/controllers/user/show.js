const showUser = async (req, res) => {
  const {
    db: { User }, // this req.db.User property is put here by the addModelsToRequest middleware
    params: { id }, // this req.params.id is a part of the request URL
  } = req;

  const user = await User.find(id);
  if (!user) return res.sendStatus(404);

  res.send(user);
};

module.exports = showUser;
