
// import React, { useEffect, useState } from 'react';
// import QuizLesson from './QuizLesson';
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
//       <div>
//       <h1>Quiz App</h1>
//       {/* Pass quizData as a prop to UserList */}
//       <QuizLesson quizData={quizData} />
//     </div>
//     </div>
//   );
// }

// export default UserList;



import { useState, useEffect, useContext } from 'react';
import QuizDataContext from '../contexts/quiz-data-conext';
import { useNavigate } from "react-router-dom";

export default function SelectLanguages({ children }) {
  const [quiz_topics, setTopics] = useState([]);
    //const [selectedTopic, setSelectedTopic] = useState(null);
    const { setQuizData } = useContext(QuizDataContext)
   const navigate = useNavigate();
    useEffect(() => {
      fetch('api/q')
        .then(response => response.json())
        .then(data => {
          setTopics(data);
        })
        .catch(error => console.error(error));
    }, []);
  
    const fetchQuizData = (quizId) => {
      // console.log("quizId", quizId)
      // fetch(`api/lessons/${quizId}`)
      //   .then(response => response.json())
      //   .then(data => {
      //     console.log("fetch quiz data", data)
      //     setQuizData(data);
      //     navigate("/lessons");
      //   })
      //   .catch(error => console.error(error));
      console.log("id of button clicked",quizId)
      setQuizData(quizId);
    };


  return (<>
   <h1>Quiz Topics</h1>
<ul>
      {quiz_topics.map(topic => (
          <li key={topic.id}>
            {topic.topic}
            <button onClick={() => fetchQuizData(topic.id)}>Fetch Quiz Data</button>
          </li>
        ))}
</ul>    
    </>
  );
}


{/* <a href="#_" className="relative px-3 py-5 font-bold text-black group" >
<span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-green-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
<span className="absolute inset-0 w-full h-full border-4 border-black"></span>
  {quiz_topics.map(topic => (
    <div key={topic.id}>
    {topic.topic === 'Spanish' && (
    <span className="relative" onClick={() => fetchQuizData(topic.id)}>
      get started
    </span>
    )}
  </div>
))}
</a> */}