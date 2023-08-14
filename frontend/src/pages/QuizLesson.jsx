// // import '/index.css';
// import React, { useEffect, useState } from "react";

// export default function QuizlessonPage() {
//   // Properties
//   const [showFinalResults, setFinalResults] = useState(false);
//   const [score, setScore] = useState(0);
//   const [currentQuestion, setCurrentQuestion] = useState(0);

//   const [questions, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch data from the API and set it in the state
//     fetch('api/questions')
//       .then(response => response.json())
//       .then(data => {
//         console.log("lesson data" + data)
//         setUsers(data)})
//       .catch(error => console.error(error));
//   }, []);
// //console.log("data users" + questions)

//   // const questions = [
//   //   {
//   //     text: "What is the capital of America?",
//   //     options: [
//   //       { id: 0, text: "New York City", isCorrect: false },
//   //       { id: 1, text: "Boston", isCorrect: false },
//   //       { id: 2, text: "Santa Fe", isCorrect: false },
//   //       { id: 3, text: "Washington DC", isCorrect: true },
//   //     ],
//   //   },
//   //   {
//   //     text: "What year was the Constitution of America written?",
//   //     options: [
//   //       { id: 0, text: "1787", isCorrect: true },
//   //       { id: 1, text: "1776", isCorrect: false },
//   //       { id: 2, text: "1774", isCorrect: false },
//   //       { id: 3, text: "1826", isCorrect: false },
//   //     ],
//   //   },
//   //   {
//   //     text: "Who was the second president of the US?",
//   //     options: [
//   //       { id: 0, text: "John Adams", isCorrect: true },
//   //       { id: 1, text: "Paul Revere", isCorrect: false },
//   //       { id: 2, text: "Thomas Jefferson", isCorrect: false },
//   //       { id: 3, text: "Benjamin Franklin", isCorrect: false },
//   //     ],
//   //   },
//   //   {
//   //     text: "What is the largest state in the US?",
//   //     options: [
//   //       { id: 0, text: "California", isCorrect: false },
//   //       { id: 1, text: "Alaska", isCorrect: true },
//   //       { id: 2, text: "Texas", isCorrect: false },
//   //       { id: 3, text: "Montana", isCorrect: false },
//   //     ],
//   //   },
//   //   {
//   //     text: "Which of the following countries DO NOT border the US?",
//   //     options: [
//   //       { id: 0, text: "Canada", isCorrect: false },
//   //       { id: 1, text: "Russia", isCorrect: true },
//   //       { id: 2, text: "Cuba", isCorrect: true },
//   //       { id: 3, text: "Mexico", isCorrect: false },
//   //     ],
//   //   },
//   // ];

//  console.log("question array" + questions)


//   return(
//     <></>
//   )

//   // return (
//   //   <div className="quiz-test">
//   //     {/* 1. Header */}
//   //     <h1> Spanish Quiz</h1>
      
//   //     {/* 2. Current Score */}
//   //     <h2> Current Score: {score}</h2>
      
//   //     {/* Check if showFinalResults is true */}
//   //     {showFinalResults ? (
//   //       <div className="final-results">
//   //         <h1>Final Results</h1>
//   //         <h2>1 out of 5 correct - (30%)</h2>
//   //         <button>Restart Quiz</button>
//   //       </div>
//   //     ) : (
//   //       // Render question card
//   //       <div className="question-card">
//   //         <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
//   //         <h3 className="question-text">{questions.topic}</h3>
//   //         <ul>
//   //           {questions.map((option) => (
//   //             <li
//   //               key={option.id}
//   //               onClick={() => optionClicked(option.isCorrect)}
//   //             >
//   //               {option.topic}
//   //             </li>
//   //           ))}
//   //         </ul>
//   //       </div>
//   //     )}
//   //   </div>
//   // );
   

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
// }


import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  const [questions, setQuestions] = useState([]); // Use appropriate state variable name


  useEffect(() => {
    // Fetch data from the API and set it in the state
    fetch('api/questions')
      .then(response => response.json())
      .then(data => {
        console.log("question data", data);
        setQuestions(data); // Use setQuestions to update the state
      })
      .catch(error => console.error(error));
  }, []);
  
  console.log("questions", questions); // Use a comma to separate the string and the variable  

  return (
    <div>
   
    </div>
  );
}

export default UserList;
