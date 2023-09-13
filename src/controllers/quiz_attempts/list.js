const listQuizAttempts = async (req, res) => {
    const { 
      db: { QuizAttempts } // this req.db.User property is put here by the addModelsToRequest middleware
    } = req; 
  
    const attempt = await QuizAttempts.list();
    console.log("were listing",attempt)
    res.send(attempt);
  };
  
  module.exports = listQuizAttempts;
  