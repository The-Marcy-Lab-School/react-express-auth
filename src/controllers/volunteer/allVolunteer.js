const allVolunteers = async (req, res) => {
    const {
        session,
        db: { Volunteer },
        body: { }
    } = req
    const user = await Volunteer.listAll(); 
    res.send(user);
    
    
}

module.exports = allVolunteers