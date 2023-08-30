
import React, { useState, useEffect } from "react";

export default function SelectedLanguagePage() {
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
      <h1>Selected language Page</h1>
      <div className="button-container">
        {quizTopic.map(language => (
          <button
            key={language.id}
            className="button-52"
            onClick={() => handleLanguageClick(language.id)}
          >
            {language.topic}
          </button>
        ))}
      </div>
    </div>
  );
}
