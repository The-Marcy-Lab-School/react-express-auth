const postEvent = async (req, res) => {
  const {
    db: { Event },
    body: { title, location, description, date, end_date, user_id },
  } = req;

  const eventId = await Event.create(
    title,
    location,
    description,
    date,
    end_date,
    user_id
  );
  console.log('yo');

  eventId
    ? res.status(201).json(eventId)
    : res.status(500).send({ err: "Can't create" });
};

module.exports = postEvent;
