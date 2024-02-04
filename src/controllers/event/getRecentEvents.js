const getRecentEvents = async (req, res) => {
  const {
    db: { Event }, // this req.db.User property is put here by the addModelsToRequest middleware
  } = req;
  console.log('ok');

  const events = await Event.recentEvents();

  if (!events) return res.sendStatus(404);
  res.send(events);
};

module.exports = getRecentEvents;
