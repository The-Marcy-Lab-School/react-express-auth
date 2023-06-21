const createEvent = async (req, res) => {
  const {
    db: { Event },
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

  const event = await Event.create({
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

  res.send(event);
};

module.exports = createEvent;
