const updateEvent = async (req, res) => {
  const {
    db: { Event },
    params: { id },
    body: {
      organizer_id,
      type,
      title,
      start_date,
      end_date,
      start_time,
      end_time,
      location,
      borough,
      description,
      image,
    },
  } = req;

  const event = await Event.find(id);
  if (!event) return res.sendStatus(404);

  const updatedEvent = await Event.update(id, {
    organizer_id,
    type,
    title,
    start_date,
    end_date,
    start_time,
    end_time,
    location,
    borough,
    description,
    image,
  });

  if (!updatedEvent) return res.sendStatus(500);

  res.send(updatedEvent);
};

module.exports = updateEvent;
