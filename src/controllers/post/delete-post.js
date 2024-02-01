const deletePost = async (req, res) => {

    const {
        db: { Post },
        params: { id }
    } = req

    const existingPost = await Post.find(id);
    if (!existingPost) return res.status(404).json({error: 'User not found'});

    const deletedUser = await User.deletePost(id);
    deletedUser ? res.status(204).json({ message: 'Successfully deleted Post.' }) : res.sendStatus(500);

}

module.exports = deletePost;