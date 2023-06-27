const listInvites = async (req, res) => {
  const {
    session,
    db: { Invitation },
    body: { receiver_id },
  } = req;
  const invites = await Invitation.list(receiver_id);
  res.send(invites);
};

module.exports = listInvites;
