const listEvents = async (req, res) => {
    const {
      session,
      db: { Events },
      body: {},
    } = req;
    const user_id = session.userId
    const listEvent = await Events.list(user_id);
    res.send(listEvent);
  };
  
  module.exports = listEvents;