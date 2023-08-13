// const listQuestion = async (req, res) => {
//     const { 
//       db: { QuizQuestions } // this req.db.User property is put here by the addModelsToRequest middleware
//     } = req; 
  
//     const question = await QuizQuestions.list();
//     console.log("quiz list" + question)
//     res.send(question);
//   };
  
//   module.exports = listQuestion;
  

const listQuestion = async (req, res) => {
  const { 
    db: { Questions } // this req.db.User property is put here by the addModelsToRequest middleware
  } = req; 
  console.log(await Questions.list())
  //const questions = await QuizQuestions.list();
  //console.log("quiz list", questions);
 // res.send(questions); // Convert the array to JSON using JSON.stringify
};

module.exports = listQuestion;
