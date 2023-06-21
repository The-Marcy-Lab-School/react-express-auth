const listJoined = async (req, res) => {
  const { UserEvent } = req.db;
  const userId = req.params.id;
  const userEvents = await UserEvent.listJoined(userId);
  res.send(userEvents);
};

module.exports = listJoined;
