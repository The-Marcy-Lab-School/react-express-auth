const listAll = async (req, res) => {
    const {
        session,
        db: { Post },
        body: {}
    } = req
    const posts = await Post.listAll(); 
    res.send(posts);
    
}

module.exports = listAll