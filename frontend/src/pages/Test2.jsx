// import React from 'react';
// import './cards.css';

// function MyCard() {
//   return (
//     <div className="container">
//       <div className="card">
//         <div className="title">
//           <h1>Umur Köse</h1>
//           <h2>"Frontend Developer"</h2>
//         </div>
//         <div className="content">
//           <div className="social">
//             <i className="fab fa-codepen"></i>
//             <a href="https://codepen.io/umurkose/" target="_blank">
//               codepen.io/umurkose
//             </a>
//           </div>

//           <div className="social">
//             <i className="fab fa-linkedin"></i>
//             <a href="https://www.linkedin.com/in/bada55-umurkose" target="_blank">
//               linkedin.com/in/umurkose
//             </a>
//           </div>

//           <div className="social">
//             <i className="fas fa-globe-europe"></i>
//             <a href="https://umurkose.com" target="_blank">
//               umurkose.com
//             </a>
//           </div>
//         </div>
//         <div className="circle"></div>
//       </div>
//     </div>
//   );
// }

// export default MyCard;


// import React, { useEffect, useState } from 'react';
// //import Progress from './Progress';

// const ProgressExampleProgress = ({ quizId, userId }) => {
//   const [scoreCount, setScoreCount] = useState(0);

//   // Function to fetch the score count by quiz ID and user ID
//   const fetchQuizScore = async () => {
//     try {
//       const response = await fetch('YOUR_API_ENDPOINT/quiz-score', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ quiz_id: quizId, user_id: userId }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         // Assuming data contains the score count, update the state
//         setScoreCount(data.scoreCount);
//       } else {
//         console.error('Failed to fetch quiz score');
//       }
//     } catch (error) {
//       console.error('An error occurred while fetching quiz score:', error);
//     }
//   };

//   useEffect(() => {
//     // Call the fetchQuizScore function when the component mounts
//     fetchQuizScore();
//   }, [quizId, userId]);

//   return (
//     <>  </>
//   )
// };

// export default ProgressExampleProgress;

import React, { useEffect, useState } from 'react';

function YourComponent() {
  const [questionsData, setQuestionsData] = useState([]);
  const [score, setScore] = useState(null);

  const fetchQuizData = (quizId, levelId) => {
    fetch(`api/get-quiz-attempts/${quizId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log("fetch data score", data);
        //setQuestionsData(data);
        
        // if (Array.isArray(data) && data.length > 0) {
        //   // Get the score from the last object in the array
        //   const lastItem = data[data.length - 1];
        //   setScore(lastItem.score);
        // } else {
        //   setScore(null); // No data or empty array
        // }
      })
      .catch((error) => {
        console.error('Error fetching quiz data:', error);
      });
  };

  useEffect(() => {
    // Example usage:
    const quizId = 1;
    // const levelId = 'your_level_id';
    fetchQuizData(quizId);
  }, []); // This will run once when the component mounts



  ////////////






  return (
    <div>
      Render your component content here
      {score !== null ? (
        <p>Score: {score}</p>
      ) : (
        <p>Unable to fetch score</p>
      )}
      fd
    </div>
  );
}

export default YourComponent;
