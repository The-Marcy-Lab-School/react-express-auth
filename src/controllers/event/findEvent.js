const findEvent = async (req, res) => {
  const {
    db: { Event }, // this req.db.User property is put here by the addModelsToRequest middleware
    params: { eventId },
  } = req;

  const event = await Event.findEvent(eventId);

  if (!event) return res.sendStatus(404);
  res.send(event);
};

module.exports = findEvent;
