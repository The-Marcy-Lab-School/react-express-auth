const destroyEvent = async (req, res) => {
  const {
    db: { Event },
    params: { eventId },
  } = req;

  const event = await Event.destroyEvent(eventId);

  res.sendStatus(event ? 204 : 404);
};

module.exports = destroyEvent;
