const allVolunteers = async (req, res) => {
    const {
        session,
        db: { Post },
        body: { event_id }
    } = req
    // const user_id = session.user_id;
    console.log(event_id)
    const user = await user.listMyPost(event_id); 
    res.send(user);
    
    
}

module.exports = allVolunteers