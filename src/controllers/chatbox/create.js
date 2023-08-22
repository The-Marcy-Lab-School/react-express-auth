// const createChatbox = async (req, res) => {
//     const {
//     session, // this req.session property is put here by the handleCookieSessions middleware
//       db: { Chatbox }, // this req.db.User property is put here by the addModelsToRequest middleware
//       body: {ai_response, user_response }, // this req.body property is put here by the client
//     } = req;
  
  

//     //session.userId = user.id;
//    //console.log("user id", user.id)
//    const userId = session.userId; 
//    console.log("chatbox create controller",  ai_response, user_response )
//     const chats = await Chatbox.create(userId, ai_response, user_response );
//     res.send(chats);
//   };
  
//   module.exports = createChatbox;
  

const Chatbox = require("../../db/models/chatbox");//imports from the model class

const createImg = async (req, res) => {
      const {
    session, // this req.session property is put here by the handleCookieSessions middleware
      db: { Chatbox }, // this req.db.User property is put here by the addModelsToRequest middleware
      body: { userResponses, aiResponses }, // this req.body property is put here by the client
    } = req;
  
  

    //session.userId = user.id;
   console.log("url from controller",userResponses, aiResponses)
   const userId = session.userId; 
   //console.log("chatbox create controller",  ai_response, user_response )
    const chats = await Chatbox.create(userId, userResponses, aiResponses);
    res.send(chats);
  };
  
  
  module.exports = createImg;
  
  
  