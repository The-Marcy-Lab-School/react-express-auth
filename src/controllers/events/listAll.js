const listAll = async (req, res) => {
    const {
        session,
        db: { Events },
        body: {}
    } = req
        
    const posts = await Events.listAll(); 
    res.send(posts);
}

module.exports = listAll