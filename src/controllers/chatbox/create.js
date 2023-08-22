const createChatbox = async (req, res) => {
    const {
      //session, // this req.session property is put here by the handleCookieSessions middleware
      db: { Chatbox }, // this req.db.User property is put here by the addModelsToRequest middleware
      body: {userid, ai_response, user_response }, // this req.body property is put here by the client
    } = req;
  
  

    //session.userId = user.id;
   //console.log("user id", user.id)
    const chats = await Chatbox.create(userid, ai_response, user_response );
    res.send(chats);
  };
  
  module.exports = createChatbox;
  