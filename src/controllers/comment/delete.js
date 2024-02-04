const deleteComment = async (req, res) => {
    const {
        db: { Comment },
        params: { id } 
    } = req;

    const findComment = await Comment.find(id);
    if (!findComment) return res.status(404).json({ error: 'Comment not found' });

    const deletedComment = await Comment.delete(id);
    deletedComment ? res.status(204).json({ message: 'Successfully deleted Post.' }) : res.sendStatus(500);

}

module.exports = deleteComment;