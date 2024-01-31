const createComment = async (req, res) => {
    const {
        db: { Comment },
        params: { post_id }, // in the URL params
        user: { id: user_id }, // in the authentication middleware
        body: { content, time }
    } = req;

    const comment = await Comment.create(post_id, user_id, content, time);

    res.send(comment);
    
}

module.exports = createComment;