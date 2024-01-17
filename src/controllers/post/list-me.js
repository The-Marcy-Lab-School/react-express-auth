const listMe = async (req, res) => {
  const { 
    session, // this req.session property is put here by the handleCookieSessions middleware
    db: { Post } // this req.db.Post property is put here by the addModelsToRequest middleware
  } = req;
  if (!session.userId) return res.sendStatus(401);

  const post = await Post.findByUserID(session.userId);
  res.send(post);
};

module.exports = listMe;
