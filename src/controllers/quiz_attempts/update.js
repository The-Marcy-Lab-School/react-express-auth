//const { isAuthorized } = require('../../utils/auth-utils');


const updateQuiz = async (req, res) => {
    const {
        session, // this req.session property is put here by the handleCookieSessions middleware
        db: { QuizAttempts }, // this req.db.User property is put here by the addModelsToRequest middleware
        body: { quiz_id, percentage, score_count }, // this req.body property is put here by the client
        params: { id }, // this req.params.id is a part of the request URL
    } = req;
    
const userId = session.userId;

if (!isAuthorized(id, session)) return res.sendStatus(403);

  const quiz = await QuizAttempts.find(id);
  if (!quiz) return res.sendStatus(404);

  const updatedQuiz = await QuizAttempts.update(userId, quiz_id, percentage, score_count );
  res.send(updatedQuiz);
};

module.exports = updateQuiz;
