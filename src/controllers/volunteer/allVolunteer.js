const allVolunteers = async (req, res) => {
    const {
        session,
        db: { Volunteer },
        body: { event_id }
    } = req
    // const user_id = session.user_id;
    console.log(event_id)
    const user = await Volunteer.allVolunteers(event_id); 
    res.send(user);
    
    
}

module.exports = allVolunteers