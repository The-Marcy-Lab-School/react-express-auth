const listPostComment = async (req, res) => {
    const {
        db: { Comment },
        params: { post_id }
    } = req;

    const comment = await Comment.findAllCommentsByPost(post_id);
    res.send(comment);
    
}

module.exports = listPostComment;