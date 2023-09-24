import { useState } from 'react';
import CommentsContext from './comment-context';

export default function CommentsDataContextProvider({ children }) {
  const [commentsData, setCommentsData] = useState(null);

  const context = { commentsData, setCommentsData};

  return (
    <CommentsContext.Provider value={ context }>
      {children}
    </CommentsContext.Provider>
  );
}
