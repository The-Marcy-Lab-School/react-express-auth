import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  const [questions, setQuestions] = useState([]); 


  useEffect(() => {
    fetch('api/questions')
      .then(response => response.json())
      .then(data => {
        console.log("question data", data);
        setQuestions(data); 
      })
      .catch(error => console.error(error));
  }, []);
  
  console.log("questions", questions); 



//   // return (
//   //   <div className="quiz-test">
//   //     {/* 1. Header */}
//   //     <h1> Spanish Quiz</h1>
      
//   //     {/* 2. Current Score */}
//   //     <h2> Current Score:{score}</h2>
      
//   //     {
//   //      {showFinalResults ? (
//   //        Final Results
//   //       <div className="final-results">
//   //         <h1>Final Results</h1>
//   //         <h2>1 out of 5 correct - (30%)</h2>
//   //         <button>Restart Quiz</button>
//   //       </div>
//   //     ) : (
//   //        Question Card
//   //       <div className="question-card">
//   //         <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
//   //         <h3 className="question-text">{questions[currentQuestion].text}</h3>
//   //         <ul>
//   //           {{questions[currentQuestion].options.map((option) => {
//   //             return (
//   //               <li
//   //                 key={option.id}
//   //                 onClick={() => optionClicked(option.isCorrect)}
//   //               >
//   //                 {option.text}
//   //               </li>
//   //             );
//   //           })} }
//   //         { </ul>
//   //       </div>
//   //     )} 
//   //      } 
      
//   //   </div>
//   // );

  // return (
  //   <div>
   
  //   </div>
  // );
}

export default UserList;
