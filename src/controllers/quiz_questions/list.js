// const listQuestion = async (req, res) => {
//     const { 
//       db: { QuizQuestions } // this req.db.User property is put here by the addModelsToRequest middleware
//     } = req; 
  
//     const question = await QuizQuestions.list();
//     console.log("quiz list" + question)
//     res.send(question);
//   };
  
//   module.exports = listQuestion;
  

// const listQuestion = async (req, res) => {
//   const { 
//     db: { Questions } // this req.db.User property is put here by the addModelsToRequest middleware
//   } = req; 
//   console.log(await Questions.list())
//   //const questions = await QuizQuestions.list();
//   //console.log("quiz list", questions);
//  // res.send(questions); // Convert the array to JSON using JSON.stringify
// };

// module.exports = listQuestion;


const createQuestion = async (req, res) => {
  const {
      
    //session, // this req.session property is put here by the handleCookieSessions middleware
    db: { QuizQuestions}, // this req.db.User property is put here by the addModelsToRequest middleware
    body: {}, // this req.body property is put here by the client
  } = req;

  // TODO: check if username is taken, what should you return?
  const questions = await QuizQuestions.list();
  // session.userId = user.id;
  console.log("quiz questionr" + questions)
  res.send(questions);
};

module.exports = createQuestion;

