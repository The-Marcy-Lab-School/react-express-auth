const listEvents = async (req, res) => {
    const {
      session,
      db: { Events },
      body: {user_id},
    } = req;
    //const user_id = session.user_id
    const listEvent = await Events.list(user_id);
    // console.log("events:" + listEvent)
    //const img = await PostedImages.create(url, userId);
    
  
    res.send(listEvent);
  };
  
  module.exports = listEvents;