const listQuiz = async (req, res) => {
    const { 
      db: { Quizzes } // this req.db.User property is put here by the addModelsToRequest middleware
    } = req; 
  
    const quizzes = await Quizzes.list();
    console.log("quiz list" + quizzes)
    res.send(quizzes);
  };
  
  module.exports = listQuiz;
  