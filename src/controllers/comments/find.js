const findComment = async (req, res) => {
    const {
      db: { Comments }, // this req.db.User property is put here by the addModelsToRequest middleware
      params: { id }, // this req.params.id is a part of the request URL
    } = req;
    console.log("test", id)
    const comment = await Comments.find(id);
    if (!comment) return res.sendStatus(404);
  console.log("comments controller", comment)
    res.send(comment);
  };
  module.exports = findComment;