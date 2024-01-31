const leaveEvent = async (req, res) => {
    const {
      db: { Event },
      body: { user_id, event_id},
    } = req;
  
    const eventId = await Event.deleteRelation(user_id, event_id);
    console.log('yo');
  
    eventId
      ? res.status(201).json(eventId)
      : res.status(500).send({ err: "Can't leave" });
  };
  
  module.exports = leaveEvent;