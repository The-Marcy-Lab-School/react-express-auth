const getEventsOfTag = async (req, res) => {
  const {
    db: { Event },
    query: { tagName },
  } = req;

  const events = await Event.getEventsWithTag(tagName);
  console.log('yo');

  events
    ? res.status(201).json(events)
    : res.status(500).send({ err: "Can't create" });
};

module.exports = getEventsOfTag;
