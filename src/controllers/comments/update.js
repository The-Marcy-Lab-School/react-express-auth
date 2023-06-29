const updateComment = async (req, res) => {
  const {
    // session,
    db: { Comment },
    body: { id, comments },
  } = req;

  // TODO: check if username is taken, what should you return?
  const commented = await Comment.updateComment(comments, id);
  // session.userId = user.id;

  res.send(commented);
};

module.exports = updateComment;
