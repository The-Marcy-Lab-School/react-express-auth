import { useState } from 'react';
import QuizDataContext from './quiz-data-conext';

export default function QuizDataContextProvider({ children }) {
  const [quizData, setQuizData] = useState(null);

  const context = { quizData, setQuizData};

  return (
    <QuizDataContext.Provider value={ context }>
      {children}
    </QuizDataContext.Provider>
  );
}
