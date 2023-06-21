const volunteer = async (req, res) => {
    const {
        session,
        db: { Volunteer },
        body: { event_id }
    } = req
    const user_id = session.userId;
    const user = await Volunteer.volunteer(user_id, event_id);
    res.send(user);
}

module.exports = volunteer;    