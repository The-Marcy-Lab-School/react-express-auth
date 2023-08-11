const createQuiz = async (req, res) => {
    const {
      session, // this req.session property is put here by the handleCookieSessions middleware
      db: { Quizzes }, // this req.db.User property is put here by the addModelsToRequest middleware
      body: { topic }, // this req.body property is put here by the client
    } = req;
  
    // TODO: check if username is taken, what should you return?
    const quiz = await Quizzes.create(topic);
    // session.userId = user.id;
    console.log("quiz controller" + quiz)
    res.send(quiz);
  };
  
  module.exports = createQuiz;
  