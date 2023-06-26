const showInvite = async (req, res) => {
  const {
    db: { Invitation },
    params: { id },
  } = req;

  const invite = await Invitation.find(id);
  if (!invite) return res.sendStatus(404);

  res.send(invite);
};

module.exports = showInvite;
