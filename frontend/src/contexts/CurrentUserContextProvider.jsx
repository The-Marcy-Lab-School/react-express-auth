import { useState } from "react";
import CurrentUserContext from "./current-user-context";

export default function CurrentUserContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [eventData, setEventData] = useState(null);

  const updateEventData = (data) => {
    setEventData(data);
  };

  const context = { currentUser, setCurrentUser, eventData, updateEventData };

  return (
    <CurrentUserContext.Provider value={context}>
      {children}
    </CurrentUserContext.Provider>
  );
}
