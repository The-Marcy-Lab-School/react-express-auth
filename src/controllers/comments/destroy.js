const deleteComment = async (req, res) => {
    const {
      session,
      db: { Comment },
      body: { id },
    } = req;
  
    const comments = await Comment.deleteComment(id);
    // session.userId = user.id;
  
    res.send(comments);
  };
  
  module.exports = deleteComment;