const volunteer = async (req, res) => {
    const {
        session,
        db: { Post },
        body: { volunteer_id, user_id, event_id}
    } = req
    // const user_id = session.user_id;
    // console.log(user_id, img_url, description, header)
    const user = await Post.volunteer(volunteer_id, user_id, event_id);
    res.send(user);
}

module.exports = volunteer;    