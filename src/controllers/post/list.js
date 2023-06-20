const listMyPost = async (req, res) => {
    const {
        session,
        db: { Post },
        body: { }
    } = req
    const user_id = session.userId;
    const posts = await Post.listMyPost(user_id); 
    res.send(posts);
    
}

module.exports = listMyPost