const deletePost = async (req, res) => {
    const {
        db: { Post },
        params: { id }
    } = req;

    const existingPost = await Post.find(id);
    if (!existingPost) return res.status(404).json({ error: 'Post not found' });

    const deletedPost = await Post.deletePost(id);
        
    deletedPost ? res.status(204).json({ message: 'Successfully deleted Post.' }) : res.sendStatus(500);
};

module.exports = deletePost;
