const getUsersInEvent = async (req, res) => {
    const { 
      db: { Event }, // this req.db.User property is put here by the addModelsToRequest middleware
      params : {eventId}
    } = req; 
    console.log("ok", eventId)
  
    const users = await Event.usersInEvent(eventId);
    res.send(users);
  };
  
  module.exports = getUsersInEvent;