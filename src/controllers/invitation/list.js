const listInvites = async (req, res) => {
  const {
    session,
    db: { Invitation },
    // body: { receiver_id },
  } = req;
  const invites = await Invitation.list(session.userId);
  res.send(invites);
};

module.exports = listInvites;
