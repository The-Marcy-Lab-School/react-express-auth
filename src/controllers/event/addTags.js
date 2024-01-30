const addTags = async (req, res) => {
  const {
    db: { Event },
    params: { eventId },
    body: { event_tag_ids },
  } = req;

  const event = await Event.tags(eventId, event_tag_ids);
  console.log(eventId, event_tag_ids);

  event
    ? res.status(201).json(event)
    : res.status(500).send({ err: "Can't create" });
};

module.exports = addTags;
