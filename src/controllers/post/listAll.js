const listAll = async (req, res) => {
    const {
        session,
        db: { Post },
        body: {}
    } = req
    const user_id = session.user_id;
    
    const posts = await Post.listAll(user_id); 
    res.send(posts);
    console.log(posts)
    // posts ? res.send(posts) : null;
    
}

module.exports = listAll