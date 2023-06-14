const listMyPost = async (req, res) => {
    const {
        session,
        db: { Post },
        params: { }
    } = req
    const user_id = session.user_id;
    console.log(user_id)
    const posts = await Post.listMyPost(user_id); 
    res.send(posts);
    // posts ? res.send(posts) : null;
    
}

module.exports = listMyPost