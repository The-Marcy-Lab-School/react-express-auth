const listComment = async (req, res) => {
  const {
    db: { Comment },
    params: { id },
  } = req;

  const commented = await Comment.listComment(id);
  // session.userId = user.id;
  console.log(id);

  res.send(commented);
};

module.exports = listComment;
