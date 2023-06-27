const destroy = async (req, res) => {
    const { db: { Invitation }, params: { id }} = req;
    const invite = await Invitation.handleInvite(id);
    if (!invite) return res.status(404).send('Invitation not found');
    res.send(invite);
  };
  
  module.exports = destroy;