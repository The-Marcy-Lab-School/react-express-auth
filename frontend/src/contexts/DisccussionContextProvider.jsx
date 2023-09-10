import { useState } from 'react';
import DiscussionContext from './discussion-context';

export default function DiscussionContextProvider({ children }) {
  const [discussionsData, setDiscussionsData] = useState(null);

  const context = { discussionsData, setDiscussionsData};

  return (
    <DiscussionContext.Provider value={ context }>
      {children}
    </DiscussionContext.Provider>
  );
}
