const listEvents = async (req, res) => {
    const {
      session,
      db: { Events },
      body: {},
    } = req;
    userId = session.userId
    const listEvent = await Events.list(user_id);
    console.log("events:" + listEvent)
    //const img = await PostedImages.create(url, userId);
    
  
    res.send(listEvent);
  };
  
  module.exports = listEvents;