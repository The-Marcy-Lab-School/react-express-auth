// import React, { useState } from "react";

// export default function QuizTestPage() {
//   const [showFinalResults, setFinalResults] = useState(false);
//   const [score, setScore] = useState(0);
//   const [currentQuestion, setCurrentQuestion] = useState(0);

//   const questions = [
//     {
//       id: 3,
//       question: 'wowow',
//       wrong_answer_1: 'YU',
//       wrong_answer_2: 'FG',
//     },
//   ];

//   const optionClicked = (isCorrect) => {
//     if (isCorrect) {
//       setScore(score + 1);
//     }
//     if (currentQuestion + 1 < questions.length) {
//       setCurrentQuestion(currentQuestion + 1);
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
//       {
        
//       showFinalResults ? (
//         <div className="final-results">
//           <h1>Final Results</h1>
//           <h2>{score} out of {questions.length} correct - ({(score / questions.length) * 100}%)</h2>
//           <button onClick={restartQuiz}>Restart Quiz</button>
//         </div>
//       ) : (
//         <div className="question-card">
//           <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
//           <h3 className="question-text">{questions.question}</h3>
//           <ul>
//             {questions.map((option) => (
//               <li key={option.id} onClick={() => optionClicked(option.answer === 'T')}>
//                 {option.answer}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )
//       }
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";

export default function QuizTestPage() {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
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

  const optionClicked = (selectedAnswer) => {
    const correctAnswer = questions[currentQuestion].answer;

    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  };

  return (
    <div className="quiz-test">
      <h1>Spanish Quiz</h1>
      <h2>Current Score: {score}</h2>
      {showFinalResults ? (
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>{score} out of {questions.length} correct - ({(score / questions.length) * 100}%)</h2>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-card">
          <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
          <h3 className="question-text">{questions[currentQuestion]?.question}</h3>
          <ul>
            <li onClick={() => optionClicked(questions[currentQuestion]?.wrong_answer_1)}>
              {questions[currentQuestion]?.wrong_answer_1}
            </li>
            <li onClick={() => optionClicked(questions[currentQuestion]?.wrong_answer_2)}>
              {questions[currentQuestion]?.wrong_answer_2}
            </li>
            <li onClick={() => optionClicked(questions[currentQuestion]?.wrong_answer_3)}>
              {questions[currentQuestion]?.wrong_answer_3}
            </li>
            <li onClick={() => optionClicked(questions[currentQuestion]?.answer)}>
              {questions[currentQuestion]?.answer}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
