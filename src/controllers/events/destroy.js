const destroyMyEvent = async (req, res) => {
  const {
      session,
      db: { Events },
      params: {event_id}
  } = req
  //const user_id = session.user_id;
  // console.log(user_id)
  const events = await Events.delete(event_id); 
  res.send(events);
  // posts ? res.send(posts) : null;
  
}

module.exports = destroyMyEvent