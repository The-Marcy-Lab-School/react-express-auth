const listU = async (req, res) => {
  const { 
    db: { QuizQuestions } // this req.db.User property is put here by the addModelsToRequest middleware
  } = req; 

  const users = await QuizQuestions.list();
  //res.send(users);
};
module.exports = listU;
