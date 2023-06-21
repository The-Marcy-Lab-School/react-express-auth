const deleteEvent = async (req, res) => {
  const {
    db: { Event },
    params: { id },
  } = req;

  const event = await Event.find(id);
  if (!event) return res.sendStatus(404);

  await Event.delete(id);
  res.sendStatus(204);
};

module.exports = deleteEvent;
