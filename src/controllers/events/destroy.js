// const destroyMyEvent = async (req, res) => {
//   const {
//       session,
//       db: { Events },
//       params: {event_id}
//   } = req
//   //const user_id = session.user_id;
//   // console.log(user_id)
//   const events = await Events.delete(event_id); 
//   console.log(events)
//   res.send(events);
//   // posts ? res.send(posts) : null;

const User = require("../../db/models/user");

  
// }

// module.exports = destroyMyEvent

const deletePost = async (req, res) => {
  const {
      session,
      db: { Events },
      body: { events_id }
  } = req
  //const user_id = session.user_id;
  
  const user = await Events.delete(events_id);
  console.log(user)
  res.send(user);
}

module.exports = deletePost;  