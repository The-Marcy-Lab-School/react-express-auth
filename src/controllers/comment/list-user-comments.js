const listMyComment = async (req, res) => {
    const {
        db: { Comment },
        params: {user_id}
    } = req;

    const myComment = await Comment.findAllCommentsByUser(user_id);
    myComment ? res.send(myComment) : res.sendStatus(404)
    
}

module.exports = listMyComment;