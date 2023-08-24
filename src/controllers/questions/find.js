const findQuestions = async (req, res) => {
    const {
      db: { Questions }, // this req.db.User property is put here by the addModelsToRequest middleware
      params: { id }, // this req.params.id is a part of the request URL
    } = req;
    const [quiz_id, level_id] = id.split('-')
    // console.log("questions find ids in controller", id)
    // console.log("questions find ids in controller", quiz_id, level_id)
    const questionsById = await Questions.find( quiz_id, level_id);
    if (!questionsById) return res.sendStatus(404);
  console.log("find questions controller", questionsById)
    res.send(questionsById);
  };
  module.exports = findQuestions;