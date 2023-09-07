import React, { useState } from "react";
import Modal from "../components/Modal";

export default function QuizLessonPage() {
  const [showModal, setShowModal] = useState(false);
  const [userProgress, setUserProgress] = useState(0); // User's progress, initially 0%
  const [quizTopic, setQuizTopic] = useState([]);

  useEffect(() => {
    fetch("/api/q")
      .then(response => response.json())
      .then(data => {
        console.log("question data", data);
        setQuizTopic(data); 
      })
      .catch(error => console.error(error));
  }, []);

  console.log("quiz array data", quizTopic);

  const handleLanguageClick = (languageId) => {
    console.log(languageId)
    fetch(`/api/question/${languageId}`)
      .then(response => response.json())
      .then(data => {
        console.log(`Language ${languageId} data`, data);
        // Perform any necessary processing with the fetched data
      })
      .catch(error => console.error(error));
  };





  return (
    <div className="centered-container">
      <h1>Spanish Lessons</h1>
      <button
    
        className="lesson-button show-modalbutton button-52"
        onClick={() => setShowModal(true)}
      >
        Spanish Lesson 1
      </button>
      <button
        className="button-52"
        disabled={userProgress < 85} // Disable the button until progress reaches 85%
      >
        Spanish Lesson 2
      </button>
      {showModal && <Modal closeModal={() => setShowModal(false)} />}
    </div>
  );
}


  