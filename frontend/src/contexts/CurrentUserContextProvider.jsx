import { useState } from 'react';
import CurrentUserContext from './current-user-context';

export default function CurrentUserContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [eventData, setEventData] = useState(null);

  const context = { currentUser, setCurrentUser };

  const updateEventData = (data) => {
    setEventData(data);
  };

  return (
    <CurrentUserContext.Provider value={ { eventData, updateEventData }}>
      {children}
    </CurrentUserContext.Provider>
  );
}
