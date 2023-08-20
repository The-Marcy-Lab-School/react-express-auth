import React, { useState } from "react";
import Modal from "../components/Modal";


export default function QuizLessonPage() {
  const [showModal, setShowModal] = useState(false);
    return (
      <div className="centered-container">
        <h1>Spanish Lessons</h1>
        <button className="lesson-button show-modalbutton" onClick={() => setShowModal(true)}>Spanish Lesson 1</button>
        <button className="lesson-button">Spanish Lesson 2</button>
       {showModal && <Modal closeModal={() => setShowModal(false)} />}
      </div>
    );
  }
  