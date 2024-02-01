const { isAuthorized } = require('../../utils/auth-utils');

const patch_pic = async (req, res) => {
  const {
    session, // this req.session property is put here by the handleCookieSessions middleware
    db: { User }, // this req.db.User property is put here by the addModelsToRequest middleware
    body: { profile_pic }, // this req.body property is put here by the client
    params: { id }, // this req.params.id is a part of the request URL
  } = req;
  console.log(req.body)
  if (!isAuthorized(id, session)) return res.sendStatus(403);
  console.log(profile_pic)
  const user = await User.find(id);
  if (!user) return res.sendStatus(404);

  const updatedUser = await user.patchPic(profile_pic);
  res.send(updatedUser);
};

module.exports = patch_pic;