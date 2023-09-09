const findLessons = async (req, res) => {
    const {
      db: { Lessons }, // this req.db.User property is put here by the addModelsToRequest middleware
      params: { id }, // this req.params.id is a part of the request URL
    } = req;
    console.log("test", id)
    const lessons = await Lessons.find(id);
    if (!lessons) return res.sendStatus(404);
  console.log("lessons controller", lessons)
    res.send(lessons);
  };
  module.exports = findLessons;