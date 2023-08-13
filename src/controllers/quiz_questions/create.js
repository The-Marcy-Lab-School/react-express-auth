const createQuestion = async (req, res) => {
    const {
        
      //session, // this req.session property is put here by the handleCookieSessions middleware
      db: { QuizQuestions}, // this req.db.User property is put here by the addModelsToRequest middleware
      body: {question, answer, wrong_answer_1, wrong_answer_2, wrong_answer_3, quiz_id }, // this req.body property is put here by the client
    } = req;
  
    // TODO: check if username is taken, what should you return?
    const questions = await QuizQuestions.create(question, answer, wrong_answer_1, wrong_answer_2, wrong_answer_3, quiz_id);
    // session.userId = user.id;
    console.log("quiz questionr" + questions)
    //res.send(questions);
  };
  
  module.exports = createQuestion;
  