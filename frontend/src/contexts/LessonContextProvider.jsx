import { useState } from 'react';
import LessonsContext from './lesson-context';

export default function LessonsDataContextProvider({ children }) {
  const [questionData, setQuestionsData] = useState(null);

  const context = { questionData, setQuestionsData};

  return (
    <LessonsContext.Provider value={ context }>
      {children}
    </LessonsContext.Provider>
  );
}

