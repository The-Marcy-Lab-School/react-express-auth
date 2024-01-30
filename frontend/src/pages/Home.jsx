import { useState, useEffect, useContext } from 'react';
import {
  fetchRecentEvents,
  fetchCommentsOnEvent,
  destroyEvent,
} from '../adapters/event-adapter';
import { fetchJoinedEvents } from '../adapters/user-adapter';
import CurrentUserContext from '../contexts/current-user-context';
import Event from '../components/Event';

export default function HomePage() {
  const { currentUser } = useContext(CurrentUserContext);
  const [events, setEvents] = useState([]);
  const [joinedEvents, setJoinedEvents] = useState({});

  useEffect(() => {
    fetchRecentEvents().then(setEvents);
  }, []);

  const loadJoinedEvents = async () => {
    if (currentUser) {
      const signedEvents = await fetchJoinedEvents(currentUser.id);
      console.log('signed Events: ', signedEvents);
      const obj = {};
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

  const deleteEvent = async (id) => {
    destroyEvent({ event_id: id });
    fetchRecentEvents().then(setEvents);
  };

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
              deleteEvent={() => deleteEvent(event.id)}
              event={event}
              loadJoinedEvents={loadJoinedEvents}
              joinedEvents={joinedEvents}
            />
          );
        })}
    </>
  );
}
