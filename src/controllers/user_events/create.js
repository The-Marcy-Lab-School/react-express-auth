const create = async (req, res) => {
  const { UserEvent } = req.db;
  const { userId, eventId } = req.params;
  try {
    const userEvent = await UserEvent.create(userId, eventId);
    res.send(userEvent);
  } catch (error) {
    res
      .status(500)
      .send({ error: "Error creating user event" });
  }
};

module.exports = create;
