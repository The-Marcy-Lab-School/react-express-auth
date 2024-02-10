const upload = async (req, res) => {
    const {
      session, 
      db: { User }, 
      params: { id },
      body: { profile_image }, 
    } = req;
  
    if (!profile_image || typeof profile_image !== 'string' || !profile_image.startsWith('data:image')) res.status(400).send({ error: 'Invalid profile_image format' })

    const user = await User.uploadProfileImage(profile_image, id);
    session.userId = user.id;
  
    res.send(user);
  };
  
  module.exports = upload;
  