const createComment = async (req, res) => {
  const {
    session: {userId},
    db: { Comment },
    body: { eventId, comments },
  } = req;

  // TODO: check if username is taken, what should you return?
  const commented = await Comment.create(eventId, userId, comments);
  // session.userId = user.id;

  res.send(commented);
};

module.exports = createComment;
