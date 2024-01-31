const getCommentsOnEvent = async (req, res) => {
    const { 
      db: { Comment }, // this req.db.User property is put here by the addModelsToRequest middleware
      params : {eventId}
    } = req; 
    console.log("ok", eventId)
  
    const comments = await Comment.commentsOnEvent(eventId);
    res.send(comments);
  };
  
  module.exports = getCommentsOnEvent;