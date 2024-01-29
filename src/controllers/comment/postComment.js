const postComment = async (req, res) => {
    const {
      db: { Comment },
      body: {  user_id, event_id, text },
    } = req;
  
    const commentId = await Comment.create(user_id, event_id, text);
    console.log('yo');
  
    commentId
      ? res.status(201).json(commentId)
      : res.status(500).send({ err: "Can't create" });
  };
  
  module.exports = postComment;