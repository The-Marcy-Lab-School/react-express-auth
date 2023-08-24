// // import React, { useState } from "react";

// // export default function QuizTestPage() {
// //   const [showFinalResults, setFinalResults] = useState(false);
// //   const [score, setScore] = useState(0);
// //   const [currentQuestion, setCurrentQuestion] = useState(0);

// //   const questions = [
// //     {
// //       id: 3,
// //       question: 'wowow',
// //       wrong_answer_1: 'YU',
// //       wrong_answer_2: 'FG',
// //     },
// //   ];

// //   const optionClicked = (isCorrect) => {
// //     if (isCorrect) {
// //       setScore(score + 1);
// //     }
// //     if (currentQuestion + 1 < questions.length) {
// //       setCurrentQuestion(currentQuestion + 1);
// //     } else {
// //       setFinalResults(true);
// //     }
// //   };

// //   const restartQuiz = () => {
// //     setScore(0);
// //     setCurrentQuestion(0);
// //     setFinalResults(false);
// //   };

// //   return (
// //     <div className="quiz-test">
// //       <h1>Spanish Quiz</h1>
// //       <h2>Current Score: {score}</h2>
// //       {
        
// //       showFinalResults ? (
// //         <div className="final-results">
// //           <h1>Final Results</h1>
// //           <h2>{score} out of {questions.length} correct - ({(score / questions.length) * 100}%)</h2>
// //           <button onClick={restartQuiz}>Restart Quiz</button>
// //         </div>
// //       ) : (
// //         <div className="question-card">
// //           <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
// //           <h3 className="question-text">{questions.question}</h3>
// //           <ul>
// //             {questions.map((option) => (
// //               <li key={option.id} onClick={() => optionClicked(option.answer === 'T')}>
// //                 {option.answer}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       )
// //       }
// //     </div>
// //   );
// // }


// import React, { useState, useEffect } from "react";

// export default function QuizTestPage() {
//   const [showFinalResults, setFinalResults] = useState(false);
//   const [score, setScore] = useState(0);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [questions, setQuestions] = useState([]);
//   const [selectedOption, setSelectedOption] = useState(null);
  

//   useEffect(() => {
//     fetch('api/questions')
//       .then(response => response.json())
//       .then(data => {
//         console.log("question data", data);
//         setQuestions(data); 
//       })
//       .catch(error => console.error(error));
//   }, []);






//  const optionClicked = (selectedAnswer) => {
//     const correctAnswer = questions[currentQuestion].answer;

//     if (selectedAnswer === correctAnswer) {
//       setScore(score + 1);
//     } else {
//       setSelectedOption(selectedAnswer); // Store the selected wrong answer
//     }

//     if (currentQuestion + 1 < questions.length) {
//       setCurrentQuestion(currentQuestion + 1);
//       setSelectedOption(null); // Clear the selected wrong answer when moving to the next question
//     } else {
//       setFinalResults(true);
//     }
//   };
//   const restartQuiz = () => {
//     setScore(0);
//     setCurrentQuestion(0);
//     setFinalResults(false);
//   };

//   return (
//     <div className="quiz-test">
//       <h1>Spanish Quiz</h1>
//       <h2>Current Score: {score}</h2>
//       {showFinalResults ? (
//         <div className="final-results">
//           <h1>Final Results</h1>
//           <h2>{score} out of {questions.length} correct - ({(score / questions.length) * 100}%)</h2>
//           <button onClick={restartQuiz}>Restart Quiz</button>
//         </div>
//       ) : (
//         <div className="question-card">
//           <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
//           <h3 className="question-text">{questions[currentQuestion]?.question}</h3>
//           <ul>
//             <li onClick={() => optionClicked(questions[currentQuestion]?.wrong_answer_1 ? "selected-wrong" : "")}>
//               {questions[currentQuestion]?.wrong_answer_1}
//             </li>
//             <li onClick={() => optionClicked(questions[currentQuestion]?.wrong_answer_2) ? "selected-wrong" : ""}>
//               {questions[currentQuestion]?.wrong_answer_2}
//             </li>
//             <li onClick={() => optionClicked(questions[currentQuestion]?.wrong_answer_3 ? "selected-wrong" : "")}>
//               {questions[currentQuestion]?.wrong_answer_3}
//             </li>
//             <li onClick={() => optionClicked(questions[currentQuestion]?.answer)}>
//               {questions[currentQuestion]?.answer}
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";

// export default function QuizTestPage() {
//   const [showFinalResults, setFinalResults] = useState(false);
//   const [score, setScore] = useState(0);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   //const [questions, setQuestions] = useState([]);
//   const [selectedOption, setSelectedOption] = useState(null); // New state for tracking selected option
//   const [wrongAnswersList, setWrongAnswersList] = useState([]);

  // This is fectching questions form the database
  // useEffect(() => {
  //   fetch('api/questions')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log("question data", data);
  //       setQuestions(data); 
  //     })
  //     .catch(error => console.error(error));
  // }, []);

//   const questions = [
//         {
//           id: 3,
//           question: 'wowow',
//           wrong_answer_1: 'YU',
//           wrong_answer_2: 'FG',
//         },
//       ];

//   const optionClicked = (selectedAnswer) => {
//     const correctAnswer = questions[currentQuestion].answer;

//     if (selectedAnswer !== correctAnswer) {
//       setWrongAnswersList((prevList) => [...prevList, selectedAnswer]); // Add the selected wrong answer to the list
//     }

//     if (selectedAnswer === correctAnswer) {
//       setScore(score + 1);
//     } else {
//       setSelectedOption(selectedAnswer); // Store the selected wrong answer
//     }

//     if (currentQuestion + 1 < questions.length) {
//       setCurrentQuestion(currentQuestion + 1);
//       setSelectedOption(null); // Clear the selected wrong answer when moving to the next question
//     } else {
//       setFinalResults(true);
//     }
//   };

//   const restartQuiz = () => {
//     setScore(0);
//     setCurrentQuestion(0);
//     setFinalResults(false);
//     setWrongAnswersList([]);
//   };

//   return (
//     <div className="quiz-test">
//       <h1>Spanish Quiz</h1>
//       <h2>Current Score: {score}</h2>
//       {showFinalResults ? (
//         <div className="final-results">
//           <h1>Final Results</h1>
//           <h2>{score} out of {questions.length} correct - ({(score / questions.length) * 100}%)</h2>
//                   <div>
//               <h3>Wrong Answers:</h3>
//               <ul>
//                 {wrongAnswersList.map((wrongAnswer, index) => (
//                   <li key={index}>{wrongAnswer}</li>
//                 ))}
//               </ul>
//             </div>
//           <button onClick={restartQuiz}>Restart Quiz</button>
//         </div>
//       ) : (
//         <div className="question-card">
//           <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
//           <h3 className="question-text">{questions[currentQuestion]?.question}</h3>
//           <ul>
//             <li
//               onClick={() => optionClicked(questions[currentQuestion]?.wrong_answer_1)}
//               className={selectedOption === questions[currentQuestion]?.wrong_answer_1 ? "selected-wrong" : ""}
//             >
//               {questions[currentQuestion]?.wrong_answer_1}
//             </li>
//             <li
//               onClick={() => optionClicked(questions[currentQuestion]?.wrong_answer_2)}
//               className={selectedOption === questions[currentQuestion]?.wrong_answer_2 ? "selected-wrong" : ""}
//             >
//               {questions[currentQuestion]?.wrong_answer_2}
//             </li>
//             <li
//               onClick={() => optionClicked(questions[currentQuestion]?.wrong_answer_3)}
//               className={selectedOption === questions[currentQuestion]?.wrong_answer_3 ? "selected-wrong" : ""}
//             >
//               {questions[currentQuestion]?.wrong_answer_3}
//             </li>
//             <li
//               onClick={() => optionClicked(questions[currentQuestion]?.answer)}
//               className={selectedOption === questions[currentQuestion]?.answer ? "selected-correct" : ""}
//             >
//               {questions[currentQuestion]?.answer}
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }


// import {Configurationn, OpenAIAPI} from "openai";
// const configuration = new Configurationn ({
//   organization : "",
//   apiKey : 
// })



