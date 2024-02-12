const postComment = async (req, res) => {
  const { db: { Comment }, body: { user_id, event_id, text } } = req;

  try {
    const newComment = await Comment.create(user_id, event_id, text);
    res.status(201).json(newComment);
  } catch (error) {
    console.error('Failed to create comment:', error);
    res.status(500).json({ message: "Can't create comment" });
  }
};

  module.exports = postComment;