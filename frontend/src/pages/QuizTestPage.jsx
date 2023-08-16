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


import React, { useState } from "react";

export default function QuizTestPage() {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      id: 3,
      answer: 'Madrid',
      question: 'What is the capital of France?',
      wrong_answer_1: 'Berlin',
      wrong_answer_2: 'Madrid',
    },
    {
      id: 3,
      answer: 'Fried Chicken',
      question: 'What is the capital of America?',
      wrong_answer_1: 'Fried Chicken',
      wrong_answer_2: 'Madrid',
    },
    // Add more questions here if needed
  ];

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
          <h3 className="question-text">{questions[currentQuestion].question}</h3>
          <ul>
            <li onClick={() => optionClicked(questions[currentQuestion].wrong_answer_1)}>
              {questions[currentQuestion].wrong_answer_1}
            </li>
            <li onClick={() => optionClicked(questions[currentQuestion].wrong_answer_2)}>
              {questions[currentQuestion].wrong_answer_2}
            </li>
            {/* Add other options here */}
          </ul>
        </div>
      )}
    </div>
  );
}

