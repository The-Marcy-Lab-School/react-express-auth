const createQuizAttempts = async (req, res) => {
    const {
      session, // this req.session property is put here by the handleCookieSessions middleware
      db: { QuizAttempts }, // this req.db.User property is put here by the addModelsToRequest middleware
      body: { userId, quiz_id, percentage, score_count }, // this req.body property is put here by the client
    } = req;
    // session.userId = user.id;
    // TODO: check if username is taken, what should you return?
    const attempts= await QuizAttempts.create(userId, quiz_id, percentage, score_count);
    // session.userId = user.id;
    console.log("quiz attempts" + attempts)
    res.send(attempts);
  };
  
  module.exports = createQuizAttempts;
  