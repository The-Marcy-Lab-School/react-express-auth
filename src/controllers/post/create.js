const createPost = async (req, res) => {
    const {
        session,
        db: { Post },
        body: {img_url, description }
    } = req
    const user_id = session.user_id;
    const user = await Post.create(user_id, img_url, description);
    res.send(user);
}

module.exports = createPost;    