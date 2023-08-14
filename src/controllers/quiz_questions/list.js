const listU = async (req, res) => {
  const { 
    db: { QuizQuestions } // this req.db.User property is put here by the addModelsToRequest middleware
  } = req; 

  try {
    const users = await QuizQuestions.list();
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching users.' });
  }
};

module.exports = listU;
