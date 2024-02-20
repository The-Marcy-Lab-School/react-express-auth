import { useState, useEffect, useContext } from 'react';
import { destroyEvent } from '../adapters/event-adapter';
import { fetchJoinedEvents } from '../adapters/user-adapter';
import CurrentUserContext from '../contexts/current-user-context';
import Event from '../components/Event';
import { useEventsStore, useHotStore } from '../store/store';

export default function CommunityPage() {
  const { currentUser } = useContext(CurrentUserContext);
  const [joinedEvents, setJoinedEvents] = useState({});
  const { events, setRecentEvents, filterEvents } = useEventsStore(
    (state) => state
  );
  const { hotEvent, setHotEvent } = useHotStore((state) => state);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setRecentEvents();
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
    setRecentEvents();
  };

  useEffect(() => {
    if (events[0]) {
      const max = events.reduce((a, b) =>
        a.attendee_count > b.attendee_count ? a : b
      );
      console.log(max);
      setHotEvent(max);
    }
  }, [events]);

  const onFilter = (event) => {
    if (event.target.value.trim().length) {
      filterEvents(event.target.value);
    } else {
      setRecentEvents();
    }
  };

  return (
    <>
      <h1>Community Page</h1>
      <p>Put some events here!</p>

      <span>location</span>
      <input type="text" onChange={onFilter}></input>

      <div>HOT EVENT</div>
      {hotEvent && (
        <Event
          key={hotEvent.id - 800}
          deleteEvent={() => deleteEvent(hotEvent.id)}
          event={hotEvent}
          loadJoinedEvents={loadJoinedEvents}
          joinedEvents={joinedEvents}
        />
      )}
      <div>HOT EVENT</div>

      <h1>Events</h1>

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
