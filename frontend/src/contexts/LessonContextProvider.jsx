import { useState } from 'react';
import LessonsContext from './lesson-context';

export default function LessonsDataContextProvider({ children }) {
  const [questions, setQuestionsData] = useState(null);

  const context = { questions, setQuestionsData};

  return (
    <LessonsContext.Provider value={ context }>
      {children}
    </LessonsContext.Provider>
  );
}
