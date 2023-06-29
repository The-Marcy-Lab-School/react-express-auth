const createComment = async (req, res) => {
  const {
    session: { userId },
    db: { Comment },
    body: { event_id, comments },
  } = req;

  console.log(event_id, comments);
  // TODO: check if username is taken, what should you return?
  const commented = await Comment.create(event_id, userId, comments);
  // session.userId = user.id;
  res.send(commented);
};

module.exports = createComment;
