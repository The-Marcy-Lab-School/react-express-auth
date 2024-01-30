const addTags = async (req, res) => {
  const {
    db: { Event },
    body: { event_id, event_tag_ids },
  } = req;

  const eventId = await Event.tags(event_id, event_tag_ids);
  console.log('yo');

  eventId
    ? res.status(201).json(eventId)
    : res.status(500).send({ err: "Can't create" });
};

module.exports = addTags;
