const listCreated = async (req, res) => {
  const { UserEvent } = req.db;
  const userId = req.params.id;
  const events = await UserEvent.listCreated(userId);
  res.send(events);
};

module.exports = listCreated;
