import { useState, useEffect, useContext } from 'react';
import {
  fetchRecentEvents,
  fetchCommentsOnEvent,
  destroyEvent,
} from '../adapters/event-adapter';
import { fetchJoinedEvents } from '../adapters/user-adapter';
import CurrentUserContext from '../contexts/current-user-context';
import Event from '../components/Event';
import { useEventsStore } from '../store/store';

export default function CommunityPage() {
  const { currentUser } = useContext(CurrentUserContext);
  // const [events, setEvents] = useState([]);
  const [joinedEvents, setJoinedEvents] = useState({});
  const { events, setRecentEvents } = useEventsStore((state) => state);

  useEffect(() => {
    setRecentEvents();
  }, [setRecentEvents]);

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
    setRecentEvents();
  };

  console.log(events);

  return (
    <>
      <h1>Community Page</h1>
      <p>Put some events here!</p>
      {currentUser && console.log(currentUser.id)}
      {events[0] &&
        events.map((event) => (
          <Event
            key={event.id - 800}
            deleteEvent={() => deleteEvent(event.id)}
            event={event}
            loadJoinedEvents={loadJoinedEvents}
            joinedEvents={joinedEvents}
          />
        ))}
    </>
  );
}
