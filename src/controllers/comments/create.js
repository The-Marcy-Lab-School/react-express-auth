const createComment = async (req, res) => {
    const {
        
      session, // this req.session property is put here by the handleCookieSessions middleware
      db: { Comments }, // this req.db.User property is put here by the addModelsToRequest middleware
      body: {  username,comment, discussionBoardId} // this req.body property is put here by the client
    } = req;
    // TODO: check if username is taken, what should you return?
   // const user_id = session.userId; 
const comments = await Comments.create(username,comment, discussionBoardId);
    // session.userId = user.id;
    //console.log("comments create from controller" + username)
    res.send(comments);
  };
  
  module.exports = createComment;
  