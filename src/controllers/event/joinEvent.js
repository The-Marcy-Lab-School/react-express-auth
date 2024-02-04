const joinEvent = async (req, res) => {
  const {
    db: { Event },
    body: { user_id, event_id },
  } = req;

  const eventId = await Event.signUpEvent(user_id, event_id);
  console.log('yo');

  eventId
    ? res.status(201).json(eventId)
    : res.status(500).send({ err: "Can't join" });
};

module.exports = joinEvent;
