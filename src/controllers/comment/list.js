const listComment = async (req, res) => {
    const {
        db: { Comment },
    } = req;

    const comment = await Comment.list();
    res.send(comment);
    
}

module.exports = listComment;