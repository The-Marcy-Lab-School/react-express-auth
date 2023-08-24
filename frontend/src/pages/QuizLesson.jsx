// import React, { useEffect, useState } from 'react';

// function UserList() {
//   //const [users, setUsers] = useState([]);

//   const [quiz_topics, setTopics] = useState([]); 


//   useEffect(() => {
//     fetch('api/q')
//       .then(response => response.json())
//       .then(data => {
//         console.log("question data", data);
//         setTopicss(data); 
//       })
//       .catch(error => console.error(error));
//   }, []);
  
//   console.log("questions", quiz_topics); 



// //   // return (
// //   //   <div className="quiz-test">
// //   //     {/* 1. Header */}
// //   //     <h1> Spanish Quiz</h1>
      
// //   //     {/* 2. Current Score */}
// //   //     <h2> Current Score:{score}</h2>
      
// //   //     {
// //   //      {showFinalResults ? (
// //   //        Final Results
// //   //       <div className="final-results">
// //   //         <h1>Final Results</h1>
// //   //         <h2>1 out of 5 correct - (30%)</h2>
// //   //         <button>Restart Quiz</button>
// //   //       </div>
// //   //     ) : (
// //   //        Question Card
// //   //       <div className="question-card">
// //   //         <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
// //   //         <h3 className="question-text">{questions[currentQuestion].text}</h3>
// //   //         <ul>
// //   //           {{questions[currentQuestion].options.map((option) => {
// //   //             return (
// //   //               <li
// //   //                 key={option.id}
// //   //                 onClick={() => optionClicked(option.isCorrect)}
// //   //               >
// //   //                 {option.text}
// //   //               </li>
// //   //             );
// //   //           })} }
// //   //         { </ul>
// //   //       </div>
// //   //     )} 
// //   //      } 
      
// //   //   </div>
// //   // );

//   // return (
//   //   <div>
   
//   //   </div>
//   // );
// }

// export default UserList;

// import React, { useEffect, useState } from 'react';

// function UserList() {
//   const [quiz_topics, setTopics] = useState([]);
//   //const [selectedTopic, setSelectedTopic] = useState(null);
//   const [quizData, setQuizData] = useState([]);

//   useEffect(() => {
//     fetch('api/q')
//       .then(response => response.json())
//       .then(data => {
//         setTopics(data);
//       })
//       .catch(error => console.error(error));
//   }, []);

//   const fetchQuizData = (quizId) => {
//     console.log("quizId", quizId)
//     fetch(`api/lessons/${quizId}`)
//       .then(response => response.json())
//       .then(data => {
//         console.log("fetch quiz data", data)
//         setQuizData(data);
//       })
//       .catch(error => console.error(error));
//   };

//   return (
//     <div>
//       <h1>Quiz Topics</h1>
//       <ul>
//         {quiz_topics.map(topic => (
//           <li key={topic.id}>
//             {topic.topic}
//             <button onClick={() => fetchQuizData(topic.id)}>Fetch Quiz Data</button>
//           </li>
//         ))}
//       </ul>

//       <h2>Quiz Data</h2>
//       <ul>
//         {quizData.map(item => (
//           <li key={item.id}>{item.data}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default UserList;

// import React, { useState, useContext  } from 'react';
// import Context from '../contexts/quiz-data-conext'

// function QuizLesson() {
//   const { quizData} = useContext(Context);
//   console.log("quizData from lessons page", quizData )
//   return (
//     <div>
//       <h2>Quiz lessons</h2>
//       <ul>
//         {quizData.map(item => (
//           <li key={item.id}>{item.lessons}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default QuizLesson;

import React, { useState, useContext } from 'react';
import Context from '../contexts/quiz-data-conext';

function QuizLesson() {
  const { quizData, setQuizData } = useContext(Context);

  const fetchLessonData = (quizId, levelId) => {

    console.log("button clickedq", quizId,levelId)
    fetch(`api/lessons-quizzes/${quizId}-${levelId}`)
      .then(response => response.json())
      .then(data => {
        
        // Update quizData with the new data
       // setQuizData(prevData => [...prevData, ...data]);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Quiz lessons</h2>
      <ul>
        {quizData.map(item => (
          <li key={item.id}>
             <button onClick={() => fetchLessonData(item.quiz_id, item.level_id)}>{item.lessons}</button>
          </li>
          
        ))}
      </ul>
    </div>
  );
}

export default QuizLesson;
