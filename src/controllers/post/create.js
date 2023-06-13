const createPost = async (req, res) => {
    const {
        session,
        db: { Post },
        body: {img_url, description, header }
    } = req
    const user_id = session.user_id;
    // console.log(user_id, img_url, description, header)
    const user = await Post.create(user_id, img_url, description, header);
    res.send(user);
}

module.exports = createPost;    