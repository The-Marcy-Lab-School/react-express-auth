import { useState } from 'react';
import LessonsContext from './lesson-context';

export default function LessonsDataContextProvider({ children }) {
  const [questionsData, setQuestionsData] = useState(null);

  const context = { questionsData, setQuestionsData};

  return (
    <LessonsContext.Provider value={ context }>
      {children}
    </LessonsContext.Provider>
  );
}
