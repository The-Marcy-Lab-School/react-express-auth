const createThread = async (req, res) => {
    const {
      session, // this req.session property is put here by the handleCookieSessions middleware
      db: { Thread }, // this req.db.User property is put here by the addModelsToRequest middleware
      body: { user_id, post_id, comment}, // this req.body property is put here by the client
    } = req;
  
    const thread = await Thread.create(user_id, post_id, comment);
    session.threadId = thread.id;
  
    res.send(thread);
  };
  
  module.exports = createThread;