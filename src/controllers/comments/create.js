const createComment = async (req, res) => {
  const {
    session,
    db: { Comment },
    body: { event_id, user_id, comments },
  } = req;

  // TODO: check if username is taken, what should you return?
  const commented = await Comment.create(event_id, user_id, comments);
  // session.userId = user.id;

  res.send(commented);
};

module.exports = createComment;
