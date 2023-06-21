const createPost = async (req, res) => {
    const {
        session,
        db: { Post },
        body: {img_url, description, header, location}
    } = req
    const user_id = session.userId;
    const user = await Post.create(user_id, img_url, description, header, location);
    res.send(user);
}
module.exports = createPost;