const getSignedUpEvents = async (req, res) => {
  const {
    db: { Event },
    params: { userId },
  } = req;
  console.log('ok', userId);

  const events = await Event.signedUpEvents(userId);
  res.send(events);
};

module.exports = getSignedUpEvents;
