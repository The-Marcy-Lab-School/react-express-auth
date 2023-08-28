const createDiscussion = async (req, res) => {
    const {
        
      session, // this req.session property is put here by the handleCookieSessions middleware
      db: { DiscussionBoard }, // this req.db.User property is put here by the addModelsToRequest middleware
      body: { topic, discussion }, // this req.body property is put here by the client
    } = req;
    // TODO: check if username is taken, what should you return?
    const user_id = session.userId; 
    const discussions = await DiscussionBoard.create(topic, discussion,user_id);
    // session.userId = user.id;
    console.log("discussions from controller" + discussions)
    //res.send(questions);
  };
  
  module.exports = createDiscussion;
  