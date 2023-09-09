const listQuiz = async (req, res) => {
    const { 
      db: {Chatbox} // this req.db.User property is put here by the addModelsToRequest middleware
    } = req; 
  
    const chats = await Chatbox.list();
   // console.log("quiz list" + quizzes)
    res.send(chats);
  };
  
  module.exports = listQuiz;
  