const volunteer = async (req, res) => {
    const {
        session,
        db: { Volunteer },
        body: {user_id, event_id}
    } = req
    // const user_id = session.user_id;
    // console.log(user_id, event_id)
    const user = await Volunteer.volunteer(user_id, event_id);
    res.send(user);
}

module.exports = volunteer;    