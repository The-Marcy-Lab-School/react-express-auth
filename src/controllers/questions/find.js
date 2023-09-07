const findQuestion = async (req, res) => {
    const {
      db: { Questions }, // this req.db.User property is put here by the addModelsToRequest middleware
      params: { id }, // this req.params.id is a part of the request URL
    } = req;
    console.log("test", id)
    const question = await Questions.find(id);
    if (!question) return res.sendStatus(404);
  console.log("questions controller", question)
    res.send(question);
  };
  
  module.exports = findQuestion;