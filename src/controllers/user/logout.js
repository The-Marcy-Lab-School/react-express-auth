const logoutUser = (req, res) => {
  req.session = null; // this req.session property is put here by handleCookieSessions middleware
  res.sendStatus(204);
};

module.exports = logoutUser;
