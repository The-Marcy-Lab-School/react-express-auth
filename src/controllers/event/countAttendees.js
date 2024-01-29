const countAttendees = async (req, res) => {
    const { 
      db: { Event }, // this req.db.User property is put here by the addModelsToRequest middleware
      params : {eventId}
    } = req; 
    console.log("ok", eventId)
  
    const amount = await Event.countUsersInEvent(eventId);
    console.log(amount)
    res.send(amount);
  };
  
  module.exports = countAttendees;