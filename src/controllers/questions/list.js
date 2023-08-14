const listQuiz = async (req, res) => {
    const { 
      db: { Questions } // this req.db.User property is put here by the addModelsToRequest middleware
    } = req; 
  
    const quizzes = await Questions.list();
    console.log("quiz list" + quizzes)
    res.send(quizzes);
  };
  
  module.exports = listQuiz;
  