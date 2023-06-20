const listComment = async (req, res) => {
    const {
      session,
      db: { Comment },
    } = req;
  
    // TODO: check if username is taken, what should you return?
    const commented = await Comment.listComment();
    // session.userId = user.id;
  
    res.send(commented);
  };
  
  module.exports = listComment;
  