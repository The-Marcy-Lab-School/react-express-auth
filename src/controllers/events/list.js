const list = async (req, res) => {
    const { Event } = req.db;
    const events = await Event.list();
    res.send(events);
};
  
module.exports = list;
  