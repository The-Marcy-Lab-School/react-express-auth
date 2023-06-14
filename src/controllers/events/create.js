const Event = require('../../db/models/event')

const createEvent = async (req, res) => {
    const newEvents = req.body;
    const event = await Event.create(newEvents);
    res.json(event);
}
  
  
module.exports = createEvent;