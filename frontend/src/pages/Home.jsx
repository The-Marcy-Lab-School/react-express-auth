import { useState, useEffect, useContext } from 'react';
import {
  fetchRecentEvents,
  fetchCommentsOnEvent,
} from '../adapters/event-adapter';
import { fetchJoinedEvents } from '../adapters/user-adapter';
import CurrentUserContext from '../contexts/current-user-context';
import Event from '../components/Event';

export default function HomePage() {
  const { currentUser } = useContext(CurrentUserContext);
  const [events, setEvents] = useState([]);
  const [joinedEvents, setJoinedEvents] = useState({});

  useEffect(() => {
    // const loadEvents = async () => {
    //   const eventArr = await fetchRecentEvents();
    //   const [res, error] = await fetchRecentEvents();
    //   setEvents(eventArr);
    //   fetchRecentEvents().then(setEvents);
    // };
    // loadEvents();

    fetchRecentEvents().then(setEvents);
  }, []);

  const loadJoinedEvents = async () => {
    if (currentUser) {
      const signedEvents = await fetchJoinedEvents(currentUser.id);
      console.log('signed Events: ', signedEvents);
      let obj = {};
      signedEvents.forEach((event) => {
        obj[event.id] = true;
      });
      setJoinedEvents(obj);
      console.log(obj);
    }
  };
  useEffect(() => {
    loadJoinedEvents();
  }, [currentUser]);

  console.log(events);

  return (
    <>
      <h1>Home</h1>
      <p>Put something interesting here!</p>
      {currentUser && console.log(currentUser.id)}
      {events[0] &&
        events.map((event) => {
          return (
            <Event
              key={event.id - 800}
              event={event}
              loadJoinedEvents={loadJoinedEvents}
              joinedEvents={joinedEvents}
            />
          );
        })}
    </>
  );
}
