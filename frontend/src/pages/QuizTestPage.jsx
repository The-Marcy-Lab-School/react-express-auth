// import '/index.css';
import React, { useState } from "react";


export default function QuizTestPage() {
  // Properties
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // const [question, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch data from the API and set it in the state
//     fetch('api/questions')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data)
//         setUsers(data)})
//       .catch(error => console.error(error));
//   }, []);
// console.log("data users" + questions)

  const questions = [
    {
      text: `What is "hello" in Spanish?`,
      options: [
        { id: 0, text: "Hola", isCorrect: true },
        { id: 1, text: "adiós", isCorrect: false },
        { id: 2, text: "gracias", isCorrect: false },
        { id: 3, text: "por favor", isCorrect: false },
      ],
    },
    {
      text: `What is "goodbye" in Spanish?`,
      options: [
        { id: 0, text: "adiós", isCorrect: true },
        { id: 1, text: "hola", isCorrect: false },
        { id: 2, text: "gracias", isCorrect: false },
        { id: 3, text: "por favor", isCorrect: false },
      ],
    },
    {
      text: `What is "thank you" in Spanish?`,
      options: [
        { id: 0, text: "gracias", isCorrect: true },
        { id: 1, text: "hola", isCorrect: false },
        { id: 2, text: "adiós", isCorrect: false },
        { id: 3, text: "por favor", isCorrect: false },
      ],
    },
    {
      text:  `What is "please" in Spanish?`,
      options: [
        { id: 0, text: "por favor", isCorrect: true },
        { id: 1, text: "hola", isCorrect: false },
        { id: 2, text: "adiós", isCorrect: false },
        { id: 3, text: "gracias", isCorrect: false },
      ],
    },
    {
      text: `How do you say "dog" in Spanish?`,
      options: [
        { id: 0, text: "gato", isCorrect: false },
        { id: 1, text: "pájaro", isCorrect: false },
        { id: 2, text: "perro", isCorrect: true },
        { id: 3, text: "pez", isCorrect: false },
      ],
    },
  ];


  // return(
  //   <></>
  // )

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1  < questions.length ) {
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
          <button onClick={() => restartQuiz()}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-card">
          <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => (
              <li key={option.id} onClick={() => optionClicked(option.isCorrect)}>
                {option.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}