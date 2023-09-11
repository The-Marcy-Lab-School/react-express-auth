const createReply = async (req, res) => {
    const {
        
      session, // this req.session property is put here by the handleCookieSessions middleware
      db: { Replies }, // this req.db.User property is put here by the addModelsToRequest middleware
      body: { username,commentId, text} // this req.body property is put here by the client
    } = req;
    // TODO: check if username is taken, what should you return?
   // const user_id = session.userId;
  // console.log("replies create from replies" + username,commentId, text) 
const reply = await Replies.create(username,commentId, text);
    // session.userId = user.id;
    //console.log("comments create from controller" + username)
    res.send(reply);
  };
  
  module.exports = createReply;
  