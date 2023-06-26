const Invitation = require("../../db/models/invitation");

const invite = async (req, res) => {
    const {
      session,
      db: { Invitation },
      body: { receiver_id, susu_id },
    } = req;
  
    // TODO: check if username is taken, what should you return?
    const invitation = await Invitation.create(session.userId, receiver_id, susu_id);
  
    res.send(invitation);
};

module.exports = invite;